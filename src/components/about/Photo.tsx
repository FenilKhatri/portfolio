import aboutImg from "@/public/images/profile/image.png";
import CurvedClipCard from '../ui/CurvedClipCard'
import { SocialDock } from '../sections/Social'

const Photo = () => {
    return (
        <>
            {/* Ambient background glow */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-orange-500/15 dark:bg-emerald-500/15 blur-[100px]" />
            </div>

            {/* Subtle accent lines — minimal geometric decoration */}
            <div
                className="absolute -top-6 left-[10%] w-[35%] h-px opacity-40
              bg-linear-to-r from-transparent via-orange-400 to-transparent
              dark:via-emerald-500"
                style={{ animation: "pulse 4s ease-in-out infinite" }}
            />
            <div
                className="absolute -bottom-6 right-[10%] w-[35%] h-px opacity-30
              bg-linear-to-r from-transparent via-orange-400 to-transparent
              dark:via-emerald-500"
                style={{ animation: "pulse 4s ease-in-out 2s infinite" }}
            />
            <div
                className="absolute -top-6 left-[10%] w-px h-[200px] opacity-40
              bg-linear-to-t from-transparent via-orange-400 to-transparent
              dark:via-emerald-500"
                style={{ animation: "pulse 4s ease-in-out infinite" }}
            />
            <div
                className="absolute -bottom-6 right-[10%] w-px h-[200px] opacity-30
              bg-linear-to-b from-transparent via-orange-400 to-transparent
              dark:via-emerald-500"
                style={{ animation: "pulse 4s ease-in-out 2s infinite" }}
            />

            {/* Small accent dots */}
            <div className="absolute -top-3 left-[8%] w-1.5 h-1.5 rounded-full bg-orange-400/50 dark:bg-emerald-500/50" />
            <div className="absolute -bottom-3 right-[8%] w-1.5 h-1.5 rounded-full bg-orange-400/40 dark:bg-emerald-500/40" />

            <CurvedClipCard
                image={aboutImg}
                imageAlt="Fenil Khatri — MERN Stack Developer"
                dockPosition="top-right"
                dockContent={<SocialDock />}
            />
        </>
    )
}

export default Photo