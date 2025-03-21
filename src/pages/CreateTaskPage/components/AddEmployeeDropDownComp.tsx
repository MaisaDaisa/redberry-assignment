type AddEmployeeDropDownCompProps = {
    onClick: () => void
}

const AddEmployeeDropDownComp = ({ onClick }: AddEmployeeDropDownCompProps) => {
    return (
        <div
            onClick={onClick}
            className="flex cursor-pointer items-center gap-2 px-[15px] py-[12px] hover:bg-gray-50"
        >
            <div className="border-purple-accent flex h-[18px] w-[18px] items-center justify-center rounded-full border-[1.5px]">
                <p className="text-purple-accent text-2xl font-light select-none">
                    +
                </p>
            </div>
            <p className="text-purple-accent">დაამატე თანამშრომელი</p>
        </div>
    )
}

export default AddEmployeeDropDownComp
