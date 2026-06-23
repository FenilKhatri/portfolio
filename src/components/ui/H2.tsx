import React from 'react'

const H2 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <h2 className={`text-3xl md:text-5xl lg:text-6xl font-medium leading-tight ${className ?? ''}`}>
            {children}
        </h2>
    )
}

export default H2