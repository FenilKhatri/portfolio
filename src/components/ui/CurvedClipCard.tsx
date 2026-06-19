"use client";

import { useId } from "react";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const PATHS: Record<DockPosition, string> = {
  "top-right":
    "M 24,0 H 130 Q 142,0 142,12 V 40 Q 142,52 154,52 H 376 Q 400,52 400,76 V 476 Q 400,500 376,500 H 24 Q 0,500 0,476 V 24 Q 0,0 24,0 Z",
  "bottom-right":
    "M 24,0 H 376 Q 400,0 400,24 V 424 Q 400,448 376,448 H 154 Q 142,448 142,460 V 488 Q 142,500 130,500 H 24 Q 0,500 0,476 V 24 Q 0,0 24,0 Z",
};

const DOCK_INSET: Record<DockPosition, React.CSSProperties> = {
  "top-right": { top: "-0.5%", left: "39%", right: "2%" },
  "bottom-right": { bottom: "-0.5%", left: "39%", right: "2%" },
};

export type DockPosition = "top-right" | "bottom-right";

export interface CurvedClipCardProps {
  image: StaticImageData | string;
  imageAlt?: string;
  dockPosition?: DockPosition;
  dockContent: React.ReactNode;
  className?: string;
}

const LIGHT_STROKE = "rgb(249 115 22)";
const DARK_STROKE  = "rgb(16 185 129)";

const LIGHT_GLOW =
  "drop-shadow(0 0 4px rgba(249,115,22,0.55)) " +
  "drop-shadow(0 0 12px rgba(249,115,22,0.22))";

const DARK_GLOW =
  "drop-shadow(0 0 4px rgba(16,185,129,0.5)) " +
  "drop-shadow(0 0 12px rgba(16,185,129,0.2))";

export function CurvedClipCard({
  image,
  imageAlt = "Profile",
  dockPosition = "top-right",
  dockContent,
  className = "",
}: CurvedClipCardProps) {
  const uid    = useId().replace(/:/g, "");
  const clipId = `ccc-clip-${uid}`;

  const shapePath = PATHS[dockPosition];
  const imageSrc  = typeof image === "string" ? image : image.src;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative select-none ${className}`}
      style={{
        width: "min(100%, 460px)",
        aspectRatio: "400 / 500",
      }}
    >
      <svg
        viewBox="0 0 400 500"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full overflow-visible"
        aria-label={imageAlt}
        role="img"
      >
        <defs>
          <clipPath id={clipId}>
            <path d={shapePath} />
          </clipPath>
        </defs>

        <path
          d={shapePath}
          className="fill-orange-500/20 dark:fill-emerald-500/12"
          style={{ filter: "blur(24px)" }}
        />

        <image
          href={imageSrc}
          x="0"
          y="0"
          width="400"
          height="500"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipId})`}
        />

        <path
          d={shapePath}
          fill="none"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke={LIGHT_STROKE}
          className="dark:hidden"
          style={{ filter: LIGHT_GLOW }}
        />

        <path
          d={shapePath}
          fill="none"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke={DARK_STROKE}
          className="hidden dark:block"
          style={{ filter: DARK_GLOW }}
        />
      </svg>
      <div
        className="absolute flex items-center"
        style={DOCK_INSET[dockPosition]}
      >
        <div
          className=" w-full flex items-center justify-around px-3 py-[9px] rounded-xl backdrop-blur-sm bg-white/30 dark:bg-black/45 border border-white/40 dark:border-white/10 shadow-[0_2px_16px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.25)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          {dockContent}
        </div>
      </div>
    </motion.div>
  );
}

export default CurvedClipCard;
