import { useEffect, useState } from 'react'
import FilterDropDownButtons from './FilterDropDownButtons'
import FilterDropDownWrapper from './FilterDropDownSections/FilterDropDownWrapper'
import { Controller, useFormContext } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import MultiCheckbox from './FilterDropDownSections/MultiCheckbox'
import { filterValues } from '@/pages/IndexPage'
import FilterEmployees from './FilterDropDownSections/FilterEmployees'
import {
    departmentSchema,
    employeeSchema,
    prioritySchema,
} from '@/api/apiSchemas'
import { getAllDepartments, getAllEmployees } from '@/api/getRequest'

type FilterProps = {
    onConfirm?: () => void
    priorities: prioritySchema[]
}

const Filter = ({ priorities }: FilterProps) => {
    const { control, setValue } = useFormContext<filterValues>()

    const [activeFilters, setActiveFilters] = useState<number>(0)
    const [employees, setEmployees] = useState<employeeSchema[]>([])
    const [departments, setDepartments] = useState<departmentSchema[]>([])

    useEffect(() => {
        const fetchData = async () => {
            setEmployees(await getAllEmployees())
            setDepartments(await getAllDepartments())

            // setEmployees(
            //     await delayedInvoke(() => {
            //         return testEmployees
            //     })
            // )
            // setDepartments(
            //     await delayedInvoke(() => {
            //         return testDepartments
            //     })
            // )
        }
        fetchData()
    }, [])

    const handleSetActiveFilter = (filterNumber: number) => {
        setActiveFilters((prev) => (prev === filterNumber ? 0 : filterNumber))
    }

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
                        {departments.length > 0 && (
                            <FilterDropDownWrapper>
                                <MultiCheckbox
                                    setValue={setValue}
                                    filters={departments}
                                    nameProp={field.name}
                                    selectedValue={field.value}
                                />
                            </FilterDropDownWrapper>
                        )}
                    </FilterDropDownButtons>
                )}
            />

            {/* პრიორიტეტი Filter */}
            <Controller
                name="priorities"
                control={control}
                render={({ field }) => (
                    <FilterDropDownButtons
                        filterText="პრიორიტეტი"
                        isActive={activeFilters === 2}
                        handleSetActive={() => handleSetActiveFilter(2)}
                    >
                        {priorities.length > 0 && (
                            <FilterDropDownWrapper>
                                <MultiCheckbox
                                    setValue={setValue}
                                    filters={priorities}
                                    nameProp={field.name}
                                    selectedValue={field.value}
                                />
                            </FilterDropDownWrapper>
                        )}
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
                        {employees.length > 0 && (
                            <FilterDropDownWrapper>
                                <FilterEmployees
                                    selectedValue={field.value}
                                    nameProp={field.name}
                                    filters={employees}
                                    setValue={setValue}
                                />
                            </FilterDropDownWrapper>
                        )}
                    </FilterDropDownButtons>
                )}
            />
            <DevTool control={control} />
        </div>
    )
}

export default Filter
