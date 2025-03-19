import { commentSchema } from '@/api/schemas/apiSchemas'
import React from 'react'

type SuvCommentProps = {
    comment: commentSchema
}
export function SubComment({ comment }: SuvCommentProps) {
    return (
        <div className="flex gap-3">
            <img
                src={
                    comment.author_avatar !== ''
                        ? comment.author_avatar
                        : 'https://picsum.photos/200'
                }
                alt={'avatar of ' + comment.author_nickname}
                className="h-[38px] w-[38px] rounded-full object-contain"
            />
            <div>
                <h4 className="text-[18px] font-semibold break-all">
                    {comment.author_nickname}
                </h4>
                <p className="font-book mt-2 text-[18px]">{comment.text}</p>
            </div>
        </div>
    )
}

export default SubComment
