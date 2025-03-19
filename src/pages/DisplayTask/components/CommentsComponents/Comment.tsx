import { commentSchema } from '@/api/schemas/apiSchemas'
import CommentAnswerButton from './CommentAnswerButton'
import SubComment from './SubComment'
import React, { useState } from 'react'
import CommentTextArea from './CommentTextArea'

type CommentProps = {
    comment: commentSchema
    onSubComment: () => any
}

export function Comment({ comment, onSubComment }: CommentProps) {
    const [commentActive, setCommentActive] = useState(false)

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

            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h4 className="text-[18px] font-semibold break-normal">
                        {comment.author_nickname}
                    </h4>
                    <p className="font-book mt-2 text-[18px] break-all">
                        {comment.text}
                    </p>

                    <CommentAnswerButton
                        onClick={() => setCommentActive(!commentActive)}
                    />
                    <div className="mt-5">
                        {commentActive ? (
                            <CommentTextArea
                                onComment={() => {
                                    onSubComment()
                                    setCommentActive(false)
                                }}
                                taskId={comment.task_id}
                                parent_id={comment.id}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                {comment.sub_comments.length > 0 && (
                    <div className="mt-5 mb-[52px] flex flex-col gap-5">
                        {comment.sub_comments.map((comment) => (
                            <SubComment
                                comment={comment}
                                key={comment.id + 'sub'}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Comment
