import { checkIfImage } from '@/utils/checkIfImage'
import { validFileSize } from '@/utils/validFileSize'
import { z } from 'zod'

// VALIDATIONS

export const MAX_FILE_SIZE = 1048576

export const imageUploadValidation = z
    .any()
    .refine((file: File) => !!file, 'Only One File')
    .refine((file) => validFileSize(file, MAX_FILE_SIZE), 'Max size Exceeded.')
    .refine((file) => checkIfImage(file), 'Only image is supported.')

export const nameSurnameValidation = z
    .string()
    .trim()
    .min(2, { message: 'მინიმუმ 2 სიმბოლო' })
    .max(255, { message: 'მაქსიმუმ 255 სიმბოლო' })
    .refine((value) => {
        return /^[A-Za-z\u10D0-\u10FF\s]+$/.test(value)
    })

// SCHEMAS

export const zodEmployeeFormSchema = z.object({
    name: nameSurnameValidation,
    surname: nameSurnameValidation,
    avatar: imageUploadValidation,
    department_id: z.number().int().positive(),
})

// Infer TypeScript type from Zod schema
export type zodEmployeeFormSchemaType = z.infer<typeof zodEmployeeFormSchema>
