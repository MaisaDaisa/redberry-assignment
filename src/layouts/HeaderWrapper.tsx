type HeaderWrapperProps = {
    children: React.ReactNode
    text?: string
    fontClassNames?: string
}

const HeaderWrapper = ({
    children,
    text = 'დავალებების გვერდი',
    fontClassNames = 'text-[34px] font-semibold',
}: HeaderWrapperProps) => {
    return (
        <>
            <h1 className={`text-gray-Shades-Headlines ${fontClassNames}`}>
                {text}
            </h1>
            {children}
        </>
    )
}

export default HeaderWrapper
