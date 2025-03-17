import { departmentSchema, prioritySchema } from '@/api/apiSchemas'
import CheckBoxWithText from '@/components/CheckBox/CheckBoxWithText'
import { MultiAcceptFilterArrays } from './FilterDepPriority'

type MultiCheckboxProps = {
    filters: MultiAcceptFilterArrays
    selectedValue: MultiAcceptFilterArrays
    setValue: (value: MultiAcceptFilterArrays) => any
}

const MultiCheckbox = ({
    filters,
    selectedValue,
    setValue,
}: MultiCheckboxProps) => {
    const handleCheck = (valueToCheck: departmentSchema | prioritySchema) => {
        if (selectedValue.some((value) => value.id === valueToCheck.id)) {
            console.log('Removing:', valueToCheck)
            setValue(
                selectedValue.filter((item) => item.id !== valueToCheck.id)
            )
        } else {
            console.log('Adding:', valueToCheck)
            setValue([...selectedValue, valueToCheck])
        }
    }

    return (
        <>
            {filters.map((filter) => (
                <CheckBoxWithText
                    key={filter.id}
                    isChecked={selectedValue.some(
                        (value) => value.id === filter.id
                    )}
                    text={filter.name}
                    onClickHandler={() => handleCheck(filter)}
                />
            ))}
        </>
    )
}

export default MultiCheckbox
