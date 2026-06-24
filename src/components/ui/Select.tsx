import React, { forwardRef } from "react";

const Select = forwardRef<HTMLSelectElement, any>(({ label, options, name, value, ...props }, ref) => {

    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="font-code text-sm md:text-base font-semibold text-orange-500 dark:text-emerald-500">
                {label}
            </label>
            <select ref={ref} name={name} id={name} value={value} className="w-full px-4 py-3 font-code bg-white dark:bg-black/50 border border-black/10 dark:border-white/10 outline-none transition-all duration-300 focus:border-orange-500 dark:focus:border-emerald-500 focus:shadow-[0_0_15px_rgba(249,115,22,0.15)] dark:focus:shadow-[0_0_15px_rgba(16,185,129,0.15)] text-black dark:text-white cursor-pointer" {...props}>
                {options.map((option: any) => (
                    <option key={option.value} value={option.value} className="dark:bg-[#111]">{option.label}</option>
                ))}
            </select>
        </div>
    )
});

export default Select