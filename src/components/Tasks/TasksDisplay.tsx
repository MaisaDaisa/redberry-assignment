import React from 'react'
import TasksColumn from './TasksColumn'

const TasksDisplay = () => {
    return (
        <div className="mt-6 grid grid-cols-4 gap-[52px]">
            <TasksColumn />
            <TasksColumn />
            <TasksColumn />
            <TasksColumn />
        </div>
    )
}

export default TasksDisplay
