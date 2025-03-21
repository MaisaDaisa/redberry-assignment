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
import { useCallback, useEffect, useState } from 'react'
import indexPageContext from '@/contexts/IndexPage/IndexPageContext'
import { useBeforeUnload, useLocation } from 'react-router'

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

    const location = useLocation()

    useEffect(() => {
        const getInfo = async () => {
            setPriorities(await getAllPriorities())
            setTasks(await getAllTasks())
            setEmployees(await getAllEmployees())
            const savedData = localStorage.filterFields
            const SavedLocationKey = localStorage.locationKey
            const savedLoc = await JSON.parse(SavedLocationKey)

            if (savedLoc === location.key) {
                try {
                    if (savedData) {
                        const parsedData = JSON.parse(savedData)
                        setFilterFields(parsedData)
                    }
                } catch (error) {
                    setFilterFields({
                        departments: [],
                        priorities: [],
                        employee: undefined,
                    })
                }
            } else {
                localStorage.removeItem('locationKey')
            }
        }
        getInfo()
    }, [])

    useBeforeUnload(
        useCallback(() => {
            localStorage.filterFields = JSON.stringify(filterFields)
            // This key is unique whenever you change the location

            // NOTE: This will still be same if you go back to
            //  your previous location and not navigate to it
            localStorage.locationKey = JSON.stringify(location.key)
        }, [filterFields])
    )

    useEffect(() => {
        console.log(location)
    }, [location.pathname])

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
