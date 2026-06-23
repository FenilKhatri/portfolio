import React from 'react'

const Description = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <p className={`text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 ${className ?? ''}`}>
            {children}
        </p>
    )
}

export default Description;