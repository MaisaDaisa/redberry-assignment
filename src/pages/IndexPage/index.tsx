import {
    departmentSchema,
    employeeSchema,
    prioritySchema,
    statusSchema,
} from '@/api/apiSchemas'
import { getAllPriorities } from '@/api/getRequest'
import Filter from '@/components/Filter'
import FilterInlineDisplay from '@/components/Filter/FilterInline/FilterInlineDisplay'
import TasksDisplay from '@/components/Tasks/TasksDisplay'
import { useStatusesContext } from '@/contexts/mainContext'
import HeaderWrapper from '@/layouts/HeaderWrapper'
import { useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

export type filterValues = {
    departments: departmentSchema[]
    priorities: prioritySchema[]
    employee: employeeSchema
}

const IndexPage = () => {
    const [priorities, setPriorities] = useState<prioritySchema[]>([])
    const statuses: statusSchema[] = useStatusesContext()

    const methods = useForm<filterValues>({
        defaultValues: {
            departments: [],
            employee: {},
            priorities: [],
        },
    })

    const onSubmit: SubmitHandler<filterValues> = (data) => {
        console.log(data)
    }

    useEffect(() => {
        const getInfo = async () => {
            setPriorities(await getAllPriorities())
            // setTasks(await getAllTasks())
            // setStatuses(await delayedInvoke(() => testStatus))
            // setPriorities(await delayedInvoke(() => testPriorities))
        }
        getInfo()
    }, [])

    return (
        <HeaderWrapper text="დავალებების გვერდი">
            <FormProvider {...methods}>
                {priorities.length > 0 && (
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <Filter priorities={priorities} />
                        <FilterInlineDisplay />
                    </form>
                )}
                {statuses.length > 0 && <TasksDisplay statuses={statuses} />}
            </FormProvider>
        </HeaderWrapper>
    )
}

export default IndexPage
