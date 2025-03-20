import { employeeSchema, prioritySchema } from '@/api/schemas/apiSchemas'
import { createContext } from 'react'

type indexPageContextTypes = {
    employees: employeeSchema[]
    priorities: prioritySchema[]
}

export const indexPageContext = createContext<
    undefined | indexPageContextTypes
>(undefined)

export default indexPageContext
