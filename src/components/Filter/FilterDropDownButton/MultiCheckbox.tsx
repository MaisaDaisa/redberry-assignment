import { departmentSchema, prioritySchema } from '@/api/schemas/apiSchemas'
import CheckBoxWithText from '@/components/CheckBox/CheckBoxWithText'
import { MultiAcceptFilterArrays } from './FilterDepPriority'

type MultiCheckboxProps = {
    filters: MultiAcceptFilterArrays
    selectedValues: MultiAcceptFilterArrays
    setValue: (value: MultiAcceptFilterArrays) => any
}

const MultiCheckbox = ({
    filters,
    selectedValues,
    setValue,
}: MultiCheckboxProps) => {
    const handleCheck = (valueToCheck: departmentSchema | prioritySchema) => {
        if (selectedValues.some((value) => value.id === valueToCheck.id)) {
            console.log('Removing:', valueToCheck)
            setValue(
                selectedValues.filter((item) => item.id !== valueToCheck.id)
            )
        } else {
            console.log('Adding:', valueToCheck)
            setValue([...selectedValues, valueToCheck])
        }
    }

    return (
        <>
            {filters.map((filter) => (
                <CheckBoxWithText
                    key={filter.id}
                    isChecked={selectedValues.some(
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
