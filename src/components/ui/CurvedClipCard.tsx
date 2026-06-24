"use client";

import { useId, useRef, useState, useEffect } from "react";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export type DockPosition = "top-right" | "bottom-right" | "none";

export interface CurvedClipCardProps {
  image: StaticImageData | string;
  imageAlt?: string;
  dockPosition?: DockPosition;
  dockContent?: React.ReactNode;
  className?: string;
  aspectRatio?: string;
  maxWidth?: string;
  variant?: "default" | "project";
}

const LIGHT_STROKE = "rgb(249 115 22)";
const DARK_STROKE = "rgb(16 185 129)";

const LIGHT_GLOW =
  "drop-shadow(0 0 4px rgba(249,115,22,0.55)) drop-shadow(0 0 12px rgba(249,115,22,0.22))";

const DARK_GLOW =
  "drop-shadow(0 0 4px rgba(16,185,129,0.5)) drop-shadow(0 0 12px rgba(16,185,129,0.2))";

const generateRectPath = (W: number, H: number) => {
  return `M 24,0 H ${W - 24} Q ${W},0 ${W},24 V ${H - 24} Q ${W},${H} ${W - 24},${H} H 24 Q 0,${H} 0,${H - 24} V 24 Q 0,0 24,0 Z`;
};

const generateTopRightPath = (notchWidth: number, notchHeight: number, W: number, H: number) => {
  const startX = W - notchWidth;
  const safeStartX = Math.max(24, Math.min(startX, W - 48));
  const safeNH = Math.min(Math.max(notchHeight, 32), H - 48);
  
  return `M 24,0 H ${safeStartX} Q ${safeStartX + 12},0 ${safeStartX + 12},12 V ${safeNH - 12} Q ${safeStartX + 12},${safeNH} ${safeStartX + 24},${safeNH} H ${W - 24} Q ${W},${safeNH} ${W},${safeNH + 24} V ${H - 24} Q ${W},${H} ${W - 24},${H} H 24 Q 0,${H} 0,${H - 24} V 24 Q 0,0 24,0 Z`;
};

const generateBottomRightPath = (notchWidth: number, notchHeight: number, W: number, H: number) => {
  const startX = W - notchWidth;
  const safeStartX = Math.max(24, Math.min(startX, W - 48));
  const safeNH = Math.min(Math.max(notchHeight, 32), H - 48);
  const NY = H - safeNH;
  
  return `M 24,0 H ${W - 24} Q ${W},0 ${W},24 V ${NY - 24} Q ${W},${NY} ${W - 24},${NY} H ${safeStartX + 24} Q ${safeStartX + 12},${NY} ${safeStartX + 12},${NY + 12} V ${H - 12} Q ${safeStartX + 12},${H} ${safeStartX},${H} H 24 Q 0,${H} 0,${H - 24} V 24 Q 0,0 24,0 Z`;
};

export default function CurvedClipCard({
  image,
  imageAlt = "Profile",
  dockPosition = "top-right",
  dockContent,
  className = "",
  aspectRatio = "400/500",
  maxWidth = "460px",
  variant = "default",
}: CurvedClipCardProps) {
  const uid = useId().replace(/:/g, "");
  const clipId = `ccc-clip-${uid}`;

  const imageSrc = typeof image === "string" ? image : image.src;

  const containerRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  const [ratioWStr, ratioHStr] = aspectRatio.split("/");
  const ratioW = Number(ratioWStr) || 400;
  const ratioH = Number(ratioHStr) || 500;
  const W = 400;
  const H = Math.round((400 * ratioH) / ratioW);

  const [path, setPath] = useState(() => {
    if (dockPosition === "none") return generateRectPath(W, H);
    return dockPosition === "top-right" 
      ? generateTopRightPath(270, 52, W, H) 
      : generateBottomRightPath(270, 52, W, H);
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const updatePath = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      if (containerRect.width === 0 || containerRect.height === 0) return;

      const effectiveDock = mobile ? "none" : dockPosition;

      if (effectiveDock === "none" || !dockRef.current) {
        setPath(generateRectPath(W, H));
        return;
      }

      const dock = dockRef.current;
      const dockRect = dock.getBoundingClientRect();

      const scaleX = W / containerRect.width;
      const scaleY = H / containerRect.height;

      const dockWidthSVG = dockRect.width * scaleX;
      const dockHeightSVG = dockRect.height * scaleY;

      const dockRightSVG = Math.max(0, (containerRect.right - dockRect.right) * scaleX);
      const dockTopSVG = Math.max(0, (dockRect.top - containerRect.top) * scaleY);
      const dockBottomSVG = Math.max(0, (containerRect.bottom - dockRect.bottom) * scaleY);

      const visualPaddingX = variant === "project" ? 16 : 24;
      const visualPaddingY = variant === "project" ? 16 : 24;

      const notchPaddingX_SVG = (12 + visualPaddingX) * scaleX;
      const notchPaddingY_SVG = visualPaddingY * scaleY;

      const notchWidth = dockWidthSVG + dockRightSVG + notchPaddingX_SVG;
      
      const notchHeight = dockPosition === "top-right"
        ? dockTopSVG + dockHeightSVG + notchPaddingY_SVG
        : dockBottomSVG + dockHeightSVG + notchPaddingY_SVG;

      setPath(
        dockPosition === "top-right"
          ? generateTopRightPath(notchWidth, notchHeight, W, H)
          : generateBottomRightPath(notchWidth, notchHeight, W, H)
      );
    };

    const observer = new ResizeObserver(updatePath);
    observer.observe(containerRef.current);
    if (dockRef.current) {
      observer.observe(dockRef.current);
    }

    window.addEventListener("resize", updatePath);
    updatePath();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [dockPosition]);

  return (
    <motion.div
      ref={containerRef}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative select-none ${className}`}
      style={{
        width: `min(100%, ${maxWidth})`,
        aspectRatio: `${ratioW} / ${ratioH}`,
      }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full overflow-visible"
        aria-label={imageAlt}
        role="img"
      >
        <defs>
          <clipPath id={clipId}>
            <motion.path 
              initial={false}
              animate={{ d: path }} 
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            />
          </clipPath>
        </defs>

        <motion.path
          initial={false}
          animate={{ d: path }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className={variant === "project" ? "fill-orange-500/10 dark:fill-emerald-500/5" : "fill-orange-500/20 dark:fill-emerald-500/12"}
          style={{ filter: variant === "project" ? "blur(12px)" : "blur(24px)" }}
        />

        <image
          href={imageSrc}
          x="0"
          y="0"
          width={W}
          height={H}
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipId})`}
        />

        <motion.path
          initial={false}
          animate={{ d: path }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          fill="none"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke={LIGHT_STROKE}
          className="dark:hidden"
          style={{ filter: LIGHT_GLOW }}
        />

        <motion.path
          initial={false}
          animate={{ d: path }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          fill="none"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke={DARK_STROKE}
          className="hidden dark:block"
          style={{ filter: DARK_GLOW }}
        />
      </svg>

      {dockContent && (
        <div
          className="absolute"
          style={{
            top: dockPosition === "top-right" ? (isMobile ? "8px" : "16px") : "auto",
            bottom: dockPosition === "bottom-right" ? (isMobile ? "8px" : "16px") : "auto",
            right: isMobile ? "8px" : "16px",
          }}
        >
          <div 
            ref={dockRef}
            className={`w-fit flex items-center justify-center rounded-xl backdrop-blur-sm bg-white/30 dark:bg-black/45 border border-white/40 dark:border-white/10 shadow-[0_2px_16px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.25)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] text-orange-600 dark:text-emerald-400 hover:text-orange-500 dark:hover:text-emerald-300 transition-colors duration-150 cursor-pointer ${
              variant === "project" ? (isMobile ? "p-2" : "p-3") : "px-3 py-[12px] gap-3"
            }`}
          >
            {dockContent}
          </div>
        </div>
      )}
    </motion.div>
  );
}