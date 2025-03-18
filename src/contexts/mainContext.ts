import { departmentSchema } from '@/api/apiSchemas'
import { createContext, useContext } from 'react'

type mainContextType = {
    departments: departmentSchema[]
}

export const mainContext = createContext<undefined | mainContextType>(undefined)

export const useDepartmentsContext = () => {
    const context = useContext(mainContext)

    if (context?.departments === undefined) {
        throw new Error('the Context needs to be invoked first...')
    }

    return context.departments
}
