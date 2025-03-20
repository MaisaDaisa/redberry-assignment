import { z } from 'zod'

export const zodCommentPostFromSchema = z.object({
    text: z.string().trim().min(1),
    parent_id: z.number().int().positive().nullable(),
})

export type zodCommentPostFromSchemaType = z.infer<
    typeof zodCommentPostFromSchema
>
