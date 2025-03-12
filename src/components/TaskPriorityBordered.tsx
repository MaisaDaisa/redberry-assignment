import React from 'react'
import Medium from '@/assets/imgs/Medium.svg'

const TaskPriorityBordered = () => {
    return (
        <div className="flex items-center gap-1 rounded-sm border-[0.5px] border-amber-500 p-1">
            <img src={Medium} alt="" />
            <p className="text-xs font-medium text-amber-500 select-none">
                საშუალო
            </p>
        </div>
    )
}

export default TaskPriorityBordered
