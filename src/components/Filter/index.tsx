import { useEffect, useState } from 'react'
import FilterDropDownButtons from './FilterDropDownButton/FilterDropDownButtons'
import { Controller, useFormContext } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { filterValues } from '@/pages/IndexPage'
import FilterEmployees from './FilterDropDownButton/FilterEmployees'
import { employeeSchema, prioritySchema } from '@/api/schemas/apiSchemas'
import { getAllEmployees } from '@/api/getRequest'
import FilterDepPriority from './FilterDropDownButton/FilterDepPriority'
import { useDepartmentsContext } from '@/contexts/mainContext'

type FilterProps = {
    onConfirm?: () => void
    priorities: prioritySchema[]
}

const Filter = ({ priorities }: FilterProps) => {
    const { control, setValue } = useFormContext<filterValues>()

    const [activeFilters, setActiveFilters] = useState<number>(0)
    const [employees, setEmployees] = useState<employeeSchema[]>([])
    const departments = useDepartmentsContext()

    useEffect(() => {
        const fetchData = async () => {
            setEmployees(await getAllEmployees())

            // for testing without api
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
        <div className="border-gray-border relative float-left mt-[52px] mb-[25px] flex items-start gap-[45px] rounded-[10px] border py-[10px]">
            {/* დეპარტამენტი Filter */}
            <Controller
                name="departments"
                control={control}
                render={({ field }) => (
                    <FilterDepPriority
                        field={field}
                        handleSetActiveFilter={() => handleSetActiveFilter(1)}
                        isActive={activeFilters === 1}
                        initialData={departments}
                        setValue={setValue}
                        title="დეპარტამენტი"
                        key={'depFilter'}
                    />
                )}
            />

            {/* პრიორიტეტი Filter */}
            <Controller
                name="priorities"
                control={control}
                render={({ field }) => (
                    <FilterDepPriority
                        title="პრიორიტეტი"
                        isActive={activeFilters === 2}
                        handleSetActiveFilter={() => handleSetActiveFilter(2)}
                        field={field}
                        initialData={priorities}
                        setValue={setValue}
                        key={'priFilter'}
                    />
                )}
            />

            {/* თანამშრომელი Filter */}
            <Controller
                name="employee"
                control={control}
                render={({ field }) => (
                    <FilterEmployees
                        filterText="თანამშრომელი"
                        isActive={activeFilters === 3}
                        handleSetActive={() => handleSetActiveFilter(3)}
                        field={field}
                        initialData={employees}
                        setValue={setValue}
                    />
                )}
            />
            <DevTool control={control} />
        </div>
    )
}

export default Filter
