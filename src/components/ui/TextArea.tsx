import { TextareaHTMLAttributes } from "react"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string,
    error?: string;
}

const TextArea = ({ label, name, placeholder, error, className = "", ...props }: TextAreaProps) => {
    return (
        <>
            <div className="flex flex-col gap-2 w-full">
                <label
                    htmlFor={name}
                    className="font-code text-sm md:text-base font-semibold text-orange-500 dark:text-emerald-500"
                >
                    {label}
                </label>

                <textarea
                    name={name}
                    id={name}
                    cols={30}
                    rows={7}
                    placeholder={placeholder}
                    className={`w-full px-4 py-3 font-code bg-transparent border border-black/10 dark:border-white/10 outline-none transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-orange-500 dark:focus:border-emerald-500 focus:shadow-[0_0_15px_rgba(249,115,22,0.15)] dark:focus:shadow-[0_0_15px_rgba(16,185,129,0.15)] resize-none ${className}`}
                    {...props}>
                </textarea>

                {error && (
                    <p className="font-code text-sm text-red-500">
                        {error}
                    </p>
                )}
            </div>
        </>
    )
}

export default TextArea