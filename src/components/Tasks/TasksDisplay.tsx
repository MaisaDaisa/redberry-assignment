import TasksColumn from '@/components/Tasks/TasksColumn'

const TasksDisplay = () => {
    return (
        <div className="mt-6 grid grid-cols-4 gap-[52px]">
            <TasksColumn statusId={3} />
            <TasksColumn statusId={1} />
            <TasksColumn />
            <TasksColumn />
        </div>
    )
}

export default TasksDisplay
