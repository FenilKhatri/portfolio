import React from 'react'

const H1 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <h1 className={`font-body text-4xl sm:text-5xl lg:text-6xl leading-tight ${className ?? ''}`}>
            {children}
        </h1>
    )
}

export default H1