import { z } from 'zod'

// Define the Zod schema
export const zodTaskPostFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: 'მინიმუმ 3 სიმბოლო' })
        .max(255, { message: 'მაქსიმუმ 255 სიმბოლო' }),

    description: z.union([
        z
            .string()
            .trim()
            .max(255, { message: 'მაქსიმუმ 255 სიმბოლო' })
            .superRefine((value, context) => {
                if (value.split(' ').length < 4) {
                    context.addIssue({
                        message: 'მინიმუმ 4 სიტყვა',
                        code: 'too_small',
                        minimum: 4,
                        inclusive: true,
                        type: 'string',
                    })
                }
            })
            .optional(),
        // Zod Optional Does not work properly with react hook form
        // so it must be compared to empty string
        z.literal(''),
    ]),
    due_date: z.date(),
    status_id: z.number().int().positive(),
    employee_id: z.number().int().positive(),
    priority_id: z.number().int().positive(),
    department_id: z.number().int().positive(),
})

// Infer TypeScript type from Zod schema
export type zodTaskPostFormSchemaType = z.infer<typeof zodTaskPostFormSchema>
