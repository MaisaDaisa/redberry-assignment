import { TaskCommentsWrapper } from './TaskCommentsWrapper'
import CommentTextArea from '../components/CommentsComponents/CommentTextArea'
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
            <TaskCommentsWrapper
                comments={comments}
                invokeFetchData={fetchData}
            />
        </aside>
    )
}

export default AsideWrapper
