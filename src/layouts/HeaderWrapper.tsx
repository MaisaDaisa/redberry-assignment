type HeaderWrapperProps = {
    children: React.ReactNode
    text?: string
}

const HeaderWrapper = ({
    children,
    text = 'დავალებების გვერდი',
}: HeaderWrapperProps) => {
    return (
        <>
            <h1 className="text-gray-Shades-Headlines text-[34px] font-semibold">
                {text}
            </h1>
            {children}
        </>
    )
}

export default HeaderWrapper
