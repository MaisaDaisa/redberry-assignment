import { useState } from 'react'
import FilterDropDownButtons from './FilterDropDownButtons'
import MultiCheckbox from './MultiCheckbox'
import { departmentSchema, prioritySchema } from '@/api/schemas/apiSchemas'

export type MultiAcceptFilterArrays = prioritySchema[] | departmentSchema[]

type FilterDepPriorityProps = {
    isActive: boolean
    title: string
    handleSetActiveFilter: () => void
    fullData: MultiAcceptFilterArrays
    setValue: (value: MultiAcceptFilterArrays) => void
    selectedValues: MultiAcceptFilterArrays
}

const FilterDepPriority = ({
    isActive,
    title,
    handleSetActiveFilter,
    setValue,
    fullData,
    selectedValues,
}: FilterDepPriorityProps) => {
    const [localSelection, setLocalSelection] =
        useState<MultiAcceptFilterArrays>(
            selectedValues.length > 0 ? selectedValues : []
        )

    return (
        <FilterDropDownButtons
            filterText={title}
            isActive={isActive}
            handleSetActive={handleSetActiveFilter}
            onConfirm={() => setValue(localSelection)}
        >
            {fullData.length > 0 && (
                <MultiCheckbox
                    setValue={setLocalSelection}
                    filters={fullData}
                    selectedValues={localSelection}
                />
            )}
        </FilterDropDownButtons>
    )
}

export default FilterDepPriority
