const CheckBox = ({ label, name, id }: { label: string, name: string, id: string }) => {
    return (
        <>
            <input type="checkbox" id={id} name={name} className="w-5 h-5 accent-orange-500 dark:accent-emerald-500 cursor-pointer" />
            <label htmlFor={id} className="font-code text-sm md:text-base font-semibold text-black dark:text-white cursor-pointer">
                {label}
            </label>
        </>
    )
}

export default CheckBox