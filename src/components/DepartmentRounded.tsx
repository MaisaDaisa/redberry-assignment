enum DepartmentColorEnum {
    'bg-department-pink',
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

    const slicedText = departmentText.split(' ')[0]
    // console.log(slicedText)
    return (
        <div
            className={`rounded-full px-[9px] py-[5px] text-center ${
                DepartmentColorEnum[depNum]
            }`}
        >
            <p className="text-xs text-white select-none">{slicedText}</p>
        </div>
    )
}

export default DepartmentRounded
