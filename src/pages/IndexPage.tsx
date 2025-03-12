import Filter from '@/components/Filter/Filter'
import FilterInlineDisplay from '@/components/Filter/FilterInlineDisplay'
import TasksDisplay from '@/components/Tasks/TasksDisplay'
import React from 'react'

const IndexPage = () => {
    return (
        <>
            <h1 className="text-gray-Shades-Headlines text-[34px] font-semibold">
                დავალებების გვერდი
            </h1>
            <Filter />
            <FilterInlineDisplay />
            <TasksDisplay />
        </>
    )
}

export default IndexPage
