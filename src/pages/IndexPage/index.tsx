import {
    departmentSchema,
    prioritySchema,
    statusSchema,
} from '@/api/apiSchemas'
import {
    getAllDepartments,
    getAllStatuses,
    getAllTasks,
} from '@/api/getRequest'
import Filter from '@/components/Filter/Filter'
import FilterInlineDisplay from '@/components/Filter/FilterInlineDisplay'
import TasksDisplay from '@/components/Tasks/TasksDisplay'
import HeaderWrapper from '@/layouts/HeaderWrapper'
import { useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

export type filterValues = {
    departments: departmentSchema[]
    priority: prioritySchema[]
    employee: string
}

const IndexPage = () => {
    const [tasks, setTasks] = useState([])
    const [statuses, setStatuses] = useState<statusSchema[]>([])

    const test = [
        {
            id: 1,
            name: 'lol',
        },
        {
            id: 2,
            name: 'gela',
        },
    ]

    const methods = useForm<filterValues>({
        defaultValues: {
            departments: test,
            priority: test,
            employee: '',
        },
    })

    const onSubmit: SubmitHandler<filterValues> = (data) => {
        console.log(data)
    }

    useEffect(() => {
        const getInfo = async () => {
            // const tasks = await getAllTasks()
            // console.log(tasks)
            // const departments = await getAllDepartments()
            const statusResponse = await getAllStatuses()
            setStatuses(statusResponse)
            // console.log(departments)
        }
        getInfo()
    }, [tasks])

    return (
        <HeaderWrapper text="დავალებების გვერდი">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Filter />
                    <FilterInlineDisplay />
                </form>

                {statuses.length > 0 && <TasksDisplay statuses={statuses} />}
            </FormProvider>
        </HeaderWrapper>
    )
}

export default IndexPage
