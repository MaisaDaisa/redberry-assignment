import { useState } from 'react'
import FilterDropDownButtons from './FilterDropDownButtons'
import FilterDropDownWrapper from './FilterDropDownSections/FilterDropDownWrapper'
import { Controller, useFormContext } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import MultiCheckbox from './FilterDropDownSections/MultiCheckbox'
import { filterValues } from '@/pages/IndexPage'
import FilterEmployees from './FilterDropDownSections/FilterEmployees'

type FilterProps = {
    onConfirm?: () => void
}

const Filter = ({}: FilterProps) => {
    const { control, setValue, watch } = useFormContext<filterValues>()
    const [activeFilters, setActiveFilters] = useState<number>(0)

    const handleSetActiveFilter = (filterNumber: number) => {
        setActiveFilters((prev) => (prev === filterNumber ? 0 : filterNumber))
    }

    const filters = watch()

    return (
        <div className="border-gray-border relative float-left mt-[52px] flex items-start gap-[45px] rounded-[10px] border py-[10px]">
            {/* დეპარტამენტი Filter */}
            <Controller
                name="departments"
                control={control}
                render={({ field }) => (
                    <FilterDropDownButtons
                        filterText="დეპარტამენტი"
                        isActive={activeFilters === 1}
                        handleSetActive={() => handleSetActiveFilter(1)}
                    >
                        <FilterDropDownWrapper>
                            <MultiCheckbox
                                setValue={setValue}
                                filters={filters.departments}
                                nameProp="departments"
                                selectedValue={field.value}
                            />
                        </FilterDropDownWrapper>
                    </FilterDropDownButtons>
                )}
            />

            {/* პრიორიტეტი Filter */}
            <Controller
                name="priority"
                control={control}
                render={({ field }) => (
                    <FilterDropDownButtons
                        filterText="პრიორიტეტი"
                        isActive={activeFilters === 2}
                        handleSetActive={() => handleSetActiveFilter(2)}
                    >
                        <FilterDropDownWrapper>
                            <MultiCheckbox
                                setValue={setValue}
                                filters={filters.priority}
                                nameProp="priority"
                                selectedValue={field.value}
                            />
                        </FilterDropDownWrapper>
                    </FilterDropDownButtons>
                )}
            />

            {/* თანამშრომელი Filter */}
            <Controller
                name="employee"
                control={control}
                render={({ field }) => (
                    <FilterDropDownButtons
                        filterText="თანამშრომელი"
                        isActive={activeFilters === 3}
                        handleSetActive={() => handleSetActiveFilter(3)}
                    >
                        <FilterEmployees
                            nameProp="employee"
                            setValue={setValue}
                        />
                    </FilterDropDownButtons>
                )}
            />
            <DevTool control={control} />
        </div>
    )
}

export default Filter
