import { filterValues } from '@/pages/IndexPage'
import FilterEmployees from './FilterDropDownButton/FilterEmployees'
import { prioritySchema } from '@/api/schemas/apiSchemas'
import FilterDepPriority from './FilterDropDownButton/FilterDepPriority'
import useDepartmentsContext from '@/contexts/AllPages/useDepartmentContext'
import useEmployeeContext from '@/contexts/IndexPage/useEmployeeContext'
import { useState } from 'react'

type FilterProps = {
    filterFields: filterValues
    onConfirm?: () => void
    priorities: prioritySchema[]
    setFilterFields: (value: filterValues) => void
}

const Filter = ({ priorities, setFilterFields, filterFields }: FilterProps) => {
    const [activeFilters, setActiveFilters] = useState<number>(0)
    const departments = useDepartmentsContext()
    const employees = useEmployeeContext()

    const handleSetActiveFilter = (filterNumber: number) => {
        setActiveFilters((prev) => (prev === filterNumber ? 0 : filterNumber))
    }

    return (
        <div className="border-gray-border relative float-left mt-[52px] mb-[25px] flex items-start gap-[45px] rounded-[10px] border py-[10px]">
            {/* დეპარტამენტი Filter */}
            {departments && (
                <FilterDepPriority
                    handleSetActiveFilter={() => handleSetActiveFilter(1)}
                    isActive={activeFilters === 1}
                    fullData={departments}
                    selectedValues={filterFields.departments}
                    setValue={(value) => {
                        // @ts-ignore
                        setFilterFields((prevState) => ({
                            ...prevState,
                            departments: value,
                        }))
                    }}
                    title="დეპარტამენტი"
                    key={'depFilter'}
                />
            )}

            {/* პრიორიტეტი Filter */}
            {priorities && (
                <FilterDepPriority
                    selectedValues={filterFields.priorities}
                    setValue={(value) => {
                        // @ts-ignore
                        setFilterFields((prevState) => ({
                            ...prevState,
                            priorities: value,
                        }))
                    }}
                    title="პრიორიტეტი"
                    isActive={activeFilters === 2}
                    handleSetActiveFilter={() => handleSetActiveFilter(2)}
                    fullData={priorities}
                    key={'priFilter'}
                />
            )}

            {/* თანამშრომელი Filter */}
            {employees && (
                <FilterEmployees
                    filterText="თანამშრომელი"
                    isActive={activeFilters === 3}
                    handleSetActive={() => handleSetActiveFilter(3)}
                    initialData={employees}
                    selectedValues={filterFields.employee}
                    setValue={(value) => {
                        // @ts-ignore
                        setFilterFields((prevState) => ({
                            ...prevState,
                            employee: value,
                        }))
                    }}
                />
            )}
        </div>
    )
}

export default Filter
