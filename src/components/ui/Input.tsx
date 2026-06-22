import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({
  label,
  name,
  className = "",
  error,
  children,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={name}
        className="font-code text-sm md:text-base font-semibold text-orange-500 dark:text-emerald-500"
      >
        {label}
      </label>

      <div className="flex items-center border border-black/10 dark:border-white/10 outline-none transition-all duration-300 focus:border-orange-500 dark:focus:border-emerald-500 focus:shadow-[0_0_15px_rgba(249,115,22,0.15)] dark:focus:shadow-[0_0_15px_rgba(16,185,129,0.15)] rounded-lg">
        <input
          id={name}
          name={name}
          className={`w-full px-4 py-3 font-code bg-transparent outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded-lg ${className}`}
          {...props}
        />
        <div className='px-3 border-l border-black/10 dark:border-white/10 h-full flex items-center'>
          {children}
        </div>
      </div>

      {error && (
        <p className="font-code text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;