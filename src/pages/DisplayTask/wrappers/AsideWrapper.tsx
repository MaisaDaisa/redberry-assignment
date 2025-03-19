import CommentTextArea from '../components/CommentsComponents/CommentTextArea'
import Comment from '../components/CommentsComponents/Comment'
import { commentSchema } from '@/api/schemas/apiSchemas'
import { useEffect, useState } from 'react'
import { getTaskComments } from '@/api/getRequest'

type AsideWrapperProps = {
    taskId: number
}

export function AsideWrapper({ taskId }: AsideWrapperProps) {
    const [comments, setComments] = useState<commentSchema[] | []>([])

    const fetchData = async () => {
        setComments(await getTaskComments(taskId))
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <aside className="isolate mt-[60px] h-[975px] w-[741px] overflow-hidden rounded-[10px] px-[45px] py-[40px]">
            <CommentTextArea taskId={taskId} onComment={() => fetchData()} />
            <div className="mt-[66px] flex h-[calc(100%-166px)] flex-col items-start gap-10">
                <div className="flex items-center gap-[7px]">
                    <h4 className="text-xl font-semibold text-black">
                        კომენტარები
                    </h4>
                    <div className="bg-purple-accent flex h-[22px] w-[30px] items-center justify-center rounded-full p-[10px]">
                        <p className="font-sm font-medium text-white">3</p>
                    </div>
                </div>
                <div className="no-scrollbar b flex h-full w-full flex-col flex-nowrap gap-10 overflow-y-scroll">
                    {comments.length > 0 &&
                        comments.map((comment) => (
                            <Comment
                                onSubComment={() => fetchData()}
                                comment={comment}
                                key={'comment' + comment.id}
                            />
                        ))}
                    {/* <Comment />
                    <Comment />
                    <Comment /> */}
                </div>
            </div>
        </aside>
    )
}

export default AsideWrapper
