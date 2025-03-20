import { zodTaskPostFormSchemaType } from '@/api/zodSchemas/zod.taskPostSchema'
import { zodEmployeeFormSchemaType } from '@/api/zodSchemas/zod.employeePostSchema'
import { zodCommentPostFromSchemaType } from '../zodSchemas/zod.commentPostSchema'

export type taskPostSchema = Omit<zodTaskPostFormSchemaType, 'department_id'>
export type commentPostSchema = zodCommentPostFromSchemaType
export type employeePostSchema = zodEmployeeFormSchemaType
