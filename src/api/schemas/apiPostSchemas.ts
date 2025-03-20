import { zodTaskPostFormSchemaType } from '@/api/zodSchemas/zod.taskPostSchema'
import { zodEmployeeFormSchemaType } from '@/api/zodSchemas/zod.employeePostSchema'

export type taskPostSchema = Omit<zodTaskPostFormSchemaType, 'department_id'>
export type commentPostSchema = {
    text: string
    parent_id: number | null
}

export type employeePostSchema = zodEmployeeFormSchemaType
