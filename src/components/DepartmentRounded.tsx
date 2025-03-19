enum DepartmentColorEnum {
    'bg-department-pink' = 1,
    'bg-department-orange',
    'bg-department-cyan',
    'bg-department-yellow',
}

const DepartmentRounded = ({
    departmentId = 1,
    departmentText,
}: {
    departmentId?: number
    departmentText: string
}) => {
    const depNum = departmentId % 4

    return (
        <div
            className={`rounded-full px-[9px] py-[5px] text-center text-xs text-white select-none ${
                DepartmentColorEnum[depNum]
            }`}
        >
            {departmentText}
        </div>
    )
}

export default DepartmentRounded
