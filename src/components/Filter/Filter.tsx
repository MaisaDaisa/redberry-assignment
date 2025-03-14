import { useState } from 'react'
import FilterDropDownButtons from './FilterDropDownButtons'
import FilterDropDownDepartments from './FilterDropDownSections/FilterDropDownDepartments'

type FilterProps = {
    onConfirm?: () => void
}

const Filter = ({}: FilterProps) => {
    const [isActive, setIsActive] = useState(true)
    return (
        <div className="border-gray-border relative float-left mt-[52px] flex items-start gap-[45px] rounded-[10px] border py-[10px]">
            <FilterDropDownButtons
                filterText="დეპარტამენტი"
                isActive={isActive}
                handleSetActive={() => setIsActive(!isActive)}
            >
                <FilterDropDownDepartments />
            </FilterDropDownButtons>
            <FilterDropDownButtons
                filterText="პრიორიტეტი"
                isActive={false}
                handleSetActive={() => setIsActive(!isActive)}
            >
                <FilterDropDownDepartments />
            </FilterDropDownButtons>
            <FilterDropDownButtons
                filterText="თანამშრომელი"
                isActive={false}
                handleSetActive={() => setIsActive(!isActive)}
            >
                <FilterDropDownDepartments />
            </FilterDropDownButtons>
        </div>
    )
}

export default Filter
