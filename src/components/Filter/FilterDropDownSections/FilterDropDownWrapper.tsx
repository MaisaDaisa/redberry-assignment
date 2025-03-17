type Props = {
    children: React.ReactNode
}

const FilterDropDownWrapper = ({ children }: Props) => {
    return (
        <div className="flex flex-col flex-wrap items-start gap-x-[50px] gap-y-4">
            {children}
        </div>
    )
}

export default FilterDropDownWrapper
