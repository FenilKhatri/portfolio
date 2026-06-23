const Title = ({ title, className }: { title: string; className?: string }) => {
    return (
        <div className={`font-code flex gap-5 items-center text-sm font-semibold tracking-[0.3em] uppercase text-orange-500 dark:text-emerald-500 ${className ?? ''}`}>
            <span className="h-3 w-3 rounded-full bg-orange-500 dark:bg-emerald-500 animate-bounce" />
            {title}
        </div>
    )
}

export default Title