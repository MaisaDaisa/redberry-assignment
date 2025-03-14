import Filter from '@/components/Filter/Filter'
import FilterInlineDisplay from '@/components/Filter/FilterInlineDisplay'
import TasksDisplay from '@/components/Tasks/TasksDisplay'
import HeaderWrapper from '@/layouts/HeaderWrapper'
import { useState } from 'react'

const IndexPage = () => {
    const [count, setCount] = useState(0)
    return (
        <HeaderWrapper text="დავალებების გვერდი">
            <p onClick={() => setCount(count + 1)}>{count}</p>
            <Filter />
            <FilterInlineDisplay />
            <TasksDisplay />
        </HeaderWrapper>
    )
}

export default IndexPage
