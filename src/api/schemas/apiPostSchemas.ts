import { employeeSchema } from './apiSchemas'

export type taskPostSchema = {
    id: number
    name: string
    description: string
    due_date: string
    status_id: number
    employee_id: number
    priority_id: number
}

export type commentPostSchema = {
    text: string
    parent_id: number | null
}

export type employeePostSchema = Omit<employeeSchema, 'id'>
