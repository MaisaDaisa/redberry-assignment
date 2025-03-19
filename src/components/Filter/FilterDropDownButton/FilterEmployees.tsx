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
    setValue: UseFormSetValue<any>
    initialData: employeeSchema[]
    field: ControllerRenderProps<any, any>
}

const FilterEmployees = ({
    field,
    initialData,
    setValue,
    filterText,
    handleSetActive,
    isActive,
}: FilterEmployeesProps) => {
    const [localSelection, setLocalSelection] = useState<
        employeeSchema | undefined
    >(field.value)

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
            onSubmit={() => setValue(field.name, localSelection)}
        >
            {initialData.map((filter: employeeSchema) => (
                <CheckBoxAvatar
                    name={filter.name}
                    avatarUrl={filter.avatar}
                    key={field.name + filter.id}
                    isChecked={localSelection?.id === filter.id}
                    onClickHandler={() => handleCheck(filter)}
                />
            ))}
        </FilterDropDownButtons>
    )
}

export default FilterEmployees
