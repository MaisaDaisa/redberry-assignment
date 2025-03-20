import { departmentSchema, statusSchema } from '@/api/schemas/apiSchemas'
import { createContext } from 'react'

export type appContext = {
    departments: departmentSchema[]
    statuses: statusSchema[]
}

export const appContext = createContext<undefined | appContext>(undefined)

export default appContext
