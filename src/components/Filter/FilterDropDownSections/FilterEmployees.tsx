import { employeeSchema } from '@/api/apiSchemas'
import CheckBoxAvatar from '@/components/CheckBox/CheckBoxAvatar'
import CheckBoxWithText from '@/components/CheckBox/CheckBoxWithText'
import { UseFormSetValue } from 'react-hook-form'

type FilterEmployeesProps = {
    filters: employeeSchema[]
    selectedValue: employeeSchema
    setValue: UseFormSetValue<any>
    nameProp: string
}

const FilterEmployees = ({
    filters,
    selectedValue,
    setValue,
    nameProp,
}: FilterEmployeesProps) => {
    const handleCheck = (valueToCheck: employeeSchema) => {
        if (selectedValue.id === valueToCheck.id) {
            setValue(nameProp, {})
        } else {
            setValue(nameProp, valueToCheck)
        }
    }
    return (
        <>
            {filters.map((filter) => (
                <CheckBoxAvatar
                    name={filter.name}
                    avatarUrl={filter.avatar}
                    key={nameProp + filter.id}
                    isChecked={selectedValue.id === filter.id}
                    onClickHandler={() => handleCheck(filter)}
                />
            ))}
        </>
    )
}

export default FilterEmployees
