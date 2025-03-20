import {
    departmentSchema,
    employeeSchema,
    prioritySchema,
    statusSchema,
    taskSchema,
} from '@/api/schemas/apiSchemas'
import {
    getAllEmployees,
    getAllPriorities,
    getAllTasks,
} from '@/api/getRequest'
import Filter from '@/components/Filter'
import FilterInlineDisplay from '@/components/Filter/FilterInline/FilterInlineDisplay'
import TasksDisplay from '@/components/Tasks/TasksDisplay'
import { useStatusesContext } from '@/contexts/AllPages/useStatusesContext'
import HeaderWrapper from '@/layouts/HeaderWrapper'
import { useCallback, useEffect, useRef, useState } from 'react'
import indexPageContext from '@/contexts/IndexPage/IndexPageContext'
import { useBeforeUnload } from 'react-router'

export type filterValues = {
    departments: departmentSchema[]
    priorities: prioritySchema[]
    employee: employeeSchema | undefined
}

const IndexPage = () => {
    const [priorities, setPriorities] = useState<prioritySchema[]>([])
    const statuses: statusSchema[] = useStatusesContext()
    const [tasks, setTasks] = useState<taskSchema[]>([])
    const [employees, setEmployees] = useState<employeeSchema[]>([])
    const [filterFields, setFilterFields] = useState<filterValues>({
        departments: [],
        priorities: [],
        employee: undefined,
    })

    useEffect(() => {
        const getInfo = async () => {
            setPriorities(await getAllPriorities())
            setTasks(await getAllTasks())
            setEmployees(await getAllEmployees())

            const savedData = localStorage.filterFields

            if (savedData) {
                const parsedData = JSON.parse(savedData)
                setFilterFields({
                    departments: parsedData.departments,
                    priorities: parsedData.priorities,
                    employee: parsedData.employee,
                })
            }
        }
        getInfo()
    }, [])

    useBeforeUnload(
        useCallback(() => {
            localStorage.filterFields = JSON.stringify({
                departments: filterFields.departments,
                priorities: filterFields.priorities,
                employee: filterFields.employee,
            })
        }, [filterFields])
    )

    useEffect(() => {
        console.log(filterFields)
    }, [filterFields])

    if (employees.length === 0 || priorities.length === 0) return <div></div>

    return (
        <indexPageContext.Provider value={{ employees, priorities }}>
            <HeaderWrapper text="დავალებების გვერდი">
                {priorities.length > 0 && (
                    <div>
                        <Filter
                            priorities={priorities}
                            setFilterFields={setFilterFields}
                            filterFields={filterFields}
                        />
                        <FilterInlineDisplay
                            setFilterFields={setFilterFields}
                            filterFields={filterFields}
                        />
                    </div>
                )}
                {statuses.length > 0 && (
                    <TasksDisplay tasks={tasks} filters={filterFields} />
                )}
            </HeaderWrapper>
        </indexPageContext.Provider>
    )
}

export default IndexPage
