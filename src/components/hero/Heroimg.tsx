import { Code2, Database, Globe, Server } from 'lucide-react'
import Image from 'next/image'
import heroImg from "@/public/images/profile/image.png";

const Heroimg = () => {
    return (
        <div className="relative w-fit flex justify-center items-center">
            {/* Availability Badge */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-background border border-border rounded-full px-4 py-2 shadow-lg whitespace-nowrap z-20">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                        Available for Work
                    </span>
                </div>
            </div>

            {/* Floating Icons */}
            <div className="floating-icon absolute top-4 -left-4 sm:-left-8 md:-left-6 lg:-left-12 p-2 sm:p-3 bg-background border rounded-full shadow-lg z-20">
                <Code2 className="text-orange-500 dark:text-emerald-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <div
                className="floating-icon absolute top-16 -right-4 sm:-right-8 md:-right-6 lg:-right-12 p-2 sm:p-3 bg-background border rounded-full shadow-lg z-20"
                style={{ animationDelay: "0.5s" }}
            >
                <Database className="text-orange-500 dark:text-emerald-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <div
                className="floating-icon absolute bottom-16 -left-4 sm:-left-8 md:-left-6 lg:-left-12 p-2 sm:p-3 bg-background border rounded-full shadow-lg z-20"
                style={{ animationDelay: "1s" }}
            >
                <Server className="text-orange-500 dark:text-emerald-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <div
                className="floating-icon absolute bottom-4 -right-4 sm:-right-8 md:-right-6 lg:-right-12 p-2 sm:p-3 bg-background border rounded-full shadow-lg z-20"
                style={{ animationDelay: "1.5s" }}
            >
                <Globe className="text-orange-500 dark:text-emerald-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Bottom Left Ring */}
            <div className="floating-top-ring absolute h-40 sm:h-50 lg:h-75 w-40 sm:w-50 lg:w-75 -bottom-10 sm:-bottom-16 -left-10 sm:-left-16 border border-orange-500 dark:border-emerald-500/40 rounded-full z-0" />

            {/* Top Right Ring */}
            <div className="floating-bottom-ring absolute h-40 sm:h-50 lg:h-75 w-40 sm:w-50 lg:w-75 -top-10 sm:-top-16 -right-10 sm:-right-16 border border-orange-500 dark:border-emerald-500/40 rounded-full z-0" />

            {/* Profile Image */}
            <Image
                src={heroImg}
                alt="Fenil Khatri"
                width={500}
                height={500}
                priority
                className="w-[250px] sm:w-[320px] md:w-[350px] lg:w-[450px] xl:w-[500px] h-auto rounded-full border-4 border-orange-500 dark:border-emerald-500 shadow-[0_0_80px_15px_rgba(249,115,22,0.4)] dark:shadow-[0_0_50px_10px_rgba(16,185,129,0.4)] z-10"
            />
        </div>
    )
}

export default Heroimg