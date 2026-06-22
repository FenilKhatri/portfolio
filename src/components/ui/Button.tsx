const variants = {
    primary: "text-white bg-emerald-500 border border-emerald-500 hover:bg-emerald-600",
    secondary: "text-white bg-orange-500 border border-orange-500 hover:bg-orange-600",
    outline: "text-black dark:text-white border border-black dark:border-white",
    danger: "text-white bg-red-500 border border-red-500 hover:bg-red-600"
};

const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-xl",
};

const Button = ({
    children,
    type="submit",
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: { children: React.ReactNode; type?: "submit" | "button"; variant?: keyof typeof variants; size?: keyof typeof sizes; className?: string; props?: React.ComponentProps<"button"> }) => {
    return (
        <button
            type={type}
            className={`
        inline-flex items-center justify-center gap-2
        font-semibold hover:rounded-sm active:scale-95
        transition duration-200 cursor-pointer
        disabled:cursor-not-allowed disabled:opacity-60
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;