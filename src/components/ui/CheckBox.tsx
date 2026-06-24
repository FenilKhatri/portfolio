import React, { forwardRef, InputHTMLAttributes } from "react";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(({ label, name, id, ...props }, ref) => {
    return (
        <>
            <input type="checkbox" id={id} name={name} ref={ref} className="w-5 h-5 accent-orange-500 dark:accent-emerald-500 cursor-pointer" {...props} />
            <label htmlFor={id} className="font-code text-sm md:text-base font-semibold text-black dark:text-white cursor-pointer">
                {label}
            </label>
        </>
    )
});

export default CheckBox