import { departmentSchema, statusSchema } from '@/api/apiSchemas'
import { createContext, useContext } from 'react'

type mainContextType = {
    departments: departmentSchema[]
    statuses: statusSchema[]
}

export const mainContext = createContext<undefined | mainContextType>(undefined)

export const useDepartmentsContext = () => {
    const context = useContext(mainContext)

    if (context?.departments === undefined) {
        throw new Error('the Context needs to be invoked first...')
    }

    return context.departments
}

export const useStatusesContext = () => {
    const context = useContext(mainContext)

    if (context?.statuses === undefined) {
        throw new Error('the Context needs to be invoked first...')
    }

    return context.statuses
}
