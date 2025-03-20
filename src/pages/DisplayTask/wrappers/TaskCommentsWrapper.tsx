import { commentSchema } from '@/api/schemas/apiSchemas'
import Comment from '@/pages/DisplayTask/components/CommentsComponents/Comment'
import { countComments } from '@/utils/countComments'

type TaskCommentsWrapperProps = {
    comments: commentSchema[]
    invokeFetchData: () => {}
}
export function TaskCommentsWrapper({
    comments,
    invokeFetchData,
}: TaskCommentsWrapperProps) {
    return (
        <div className="mt-[66px] flex h-[calc(100%-166px)] flex-col items-start gap-10">
            <div className="flex items-center gap-[7px]">
                <h4 className="text-xl font-semibold text-black">
                    კომენტარები
                </h4>
                <div className="bg-purple-accent flex h-[22px] w-[30px] items-center justify-center rounded-full p-[10px]">
                    <p className="font-sm font-medium text-white">
                        {countComments(comments)}
                    </p>
                </div>
            </div>
            <div className="no-scrollbar b flex h-full w-full flex-col flex-nowrap gap-10 overflow-y-scroll">
                {comments.length > 0 &&
                    comments.map((comment) => (
                        <Comment
                            onSubComment={invokeFetchData}
                            comment={comment}
                            key={'comment' + comment.id}
                        />
                    ))}
                {/* <Comment />
        <Comment />
        <Comment /> */}
            </div>
        </div>
    )
}
