interface MainProps {
    marginTop?: string
    children?: React.ReactNode
}

const MainSection = ({ children, marginTop = '40px' }: MainProps) => {
    return (
        <main
            className="mx-auto flex max-w-[1920px] flex-col px-(--global-padding) pb-[151px]"
            style={{ marginTop: marginTop }}
        >
            {children}
        </main>
    )
}

export default MainSection
