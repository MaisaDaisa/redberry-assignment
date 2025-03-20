import { employeeSchema } from '@/api/schemas/apiSchemas'
import CheckBoxAvatar from '@/components/CheckBox/CheckBoxAvatar'
import { ControllerRenderProps, UseFormSetValue } from 'react-hook-form'
import FilterDropDownButtons, {
    FilterDropDownButtonsProps,
} from './FilterDropDownButtons'
import { useState } from 'react'

type FilterEmployeesProps = Omit<
    FilterDropDownButtonsProps,
    'children' | 'onSubmit'
> & {
    setValue: (value: employeeSchema | undefined) => void
    initialData: employeeSchema[]
    selectedValues: employeeSchema | undefined
}

const FilterEmployees = ({
    initialData,
    setValue,
    filterText,
    handleSetActive,
    isActive,
    selectedValues,
}: FilterEmployeesProps) => {
    const [localSelection, setLocalSelection] = useState<
        employeeSchema | undefined
    >(selectedValues)

    const handleCheck = (valueToCheck: employeeSchema) => {
        !localSelection && setLocalSelection(valueToCheck)
        if (localSelection?.id === valueToCheck.id) {
            setLocalSelection(undefined)
        } else {
            setLocalSelection(valueToCheck)
        }
    }

    return (
        <FilterDropDownButtons
            filterText={filterText}
            isActive={isActive}
            handleSetActive={handleSetActive}
            onConfirm={() => setValue(localSelection)}
        >
            {initialData.map((filter: employeeSchema) => (
                <CheckBoxAvatar
                    name={filter.name + ' ' + filter.surname}
                    avatarUrl={filter.avatar}
                    key={filter.name + filter.id}
                    isChecked={localSelection?.id === filter.id}
                    onClickHandler={() => handleCheck(filter)}
                />
            ))}
        </FilterDropDownButtons>
    )
}

export default FilterEmployees
