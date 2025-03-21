import { departmentSchema, prioritySchema } from '@/api/schemas/apiSchemas'
import { filterValues } from '@/pages/IndexPage'
import FilterDisplayText from './FilterDisplayText'

type FilterInlineDisplayProps = {
    setFilterFields: (filterFields: filterValues) => void
    filterFields: filterValues
}

const FilterInlineDisplay = ({
    setFilterFields,
    filterFields,
}: FilterInlineDisplayProps) => {
    return (
        <div className="flex min-h-[30px] w-full flex-wrap justify-start gap-4">
            {filterFields?.departments.length > 0 &&
                filterFields.departments.map((department) => (
                    <FilterDisplayText
                        key={department.id}
                        text={department.name}
                        onClickHandler={() =>
                            //@ts-ignore
                            setFilterFields((prev: filterValues) => {
                                return {
                                    ...prev,
                                    departments: prev.departments.filter(
                                        (dep: departmentSchema) =>
                                            dep.id !== department.id
                                    ),
                                }
                            })
                        }
                    />
                ))}
            {filterFields?.priorities.length > 0 &&
                filterFields.priorities.map((priority) => (
                    <FilterDisplayText
                        key={priority.id}
                        text={priority.name}
                        onClickHandler={() =>
                            //@ts-ignore
                            setFilterFields((prev: filterValues) => {
                                return {
                                    ...prev,
                                    priorities: prev.priorities.filter(
                                        (pri: prioritySchema) =>
                                            pri.id !== priority.id
                                    ),
                                }
                            })
                        }
                    />
                ))}
            {filterFields.employee && (
                <FilterDisplayText
                    key={filterFields?.employee.id}
                    text={
                        filterFields?.employee.name +
                        ' ' +
                        filterFields?.employee.surname
                    }
                    onClickHandler={() => {
                        //@ts-ignore
                        setFilterFields((prev: filterValues) => {
                            return {
                                ...prev,
                                employee: undefined,
                            }
                        })
                    }}
                />
            )}
        </div>
    )
}

export default FilterInlineDisplay
