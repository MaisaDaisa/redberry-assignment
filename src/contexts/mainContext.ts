import { departmentSchema } from '@/api/apiSchemas'
import { createContext, useContext } from 'react'

type mainContextType = departmentSchema[]

export const mainContext = createContext<undefined | mainContextType>(undefined)

export const useDepartmentsContext = () => {
    const departments = useContext(mainContext)

    if (departments === undefined) {
        throw new Error('the Context needs to be invoked first...')
    }

    return departments
}
