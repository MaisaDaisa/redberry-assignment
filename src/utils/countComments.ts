import { commentSchema } from '@/api/schemas/apiSchemas'

const countComments = (comments: commentSchema[]) => {
    let count = 0
    comments.forEach((comment) => {
        // For The initialComment
        count++
        // For inner Comments
        count += comment.sub_comments.length
    })
    return count
}
