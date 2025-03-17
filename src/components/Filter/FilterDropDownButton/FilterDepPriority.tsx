import React, { useState } from 'react'
import FilterDropDownButtons from './FilterDropDownButtons'
import MultiCheckbox from './MultiCheckbox'
import { ControllerRenderProps, UseFormSetValue } from 'react-hook-form'
import { departmentSchema, prioritySchema } from '@/api/apiSchemas'

export type MultiAcceptFilterArrays = prioritySchema[] | departmentSchema[]

type FilterDepPriorityProps = {
    isActive: boolean
    title: string
    handleSetActiveFilter: () => void
    setValue: UseFormSetValue<any>
    initialData: MultiAcceptFilterArrays
    field: ControllerRenderProps<any, any>
}

const FilterDepPriority = ({
    isActive,
    title,
    handleSetActiveFilter,
    setValue,
    initialData,
    field,
}: FilterDepPriorityProps) => {
    const [localSelection, setLocalSelection] =
        useState<MultiAcceptFilterArrays>(field.value)

    return (
        <FilterDropDownButtons
            filterText={title}
            isActive={isActive}
            handleSetActive={handleSetActiveFilter}
            onSubmit={() => setValue(field.name, localSelection)}
        >
            {initialData.length > 0 && (
                <MultiCheckbox
                    setValue={setLocalSelection}
                    filters={initialData}
                    selectedValue={localSelection}
                />
            )}
        </FilterDropDownButtons>
    )
}

export default FilterDepPriority
