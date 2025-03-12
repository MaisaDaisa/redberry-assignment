import React from 'react'
import TaskCard from './TaskCard/TaskCard'

const TasksColumn = () => {
    return (
        <div className="flex flex-col gap-[30px]">
            <div className="flex justify-center rounded-[10px] bg-yellow-400 py-[15px]">
                <p className="text-xl font-medium text-white">დასაწყები</p>
            </div>
            <div className="flex flex-col gap-[30px]">
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>
        </div>
    )
}

export default TasksColumn
