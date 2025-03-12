import React from 'react'

interface MainProps {
    marginTop?: string
    children?: React.ReactNode
}

const MainSection = ({ children, marginTop = '40px' }: MainProps) => {
    return (
        <main
            className="mx-auto max-w-[1920px] px-(--global-padding)"
            style={{ marginTop: marginTop }}
        >
            {children}
        </main>
    )
}

export default MainSection
