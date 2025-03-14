import Filter from '@/components/Filter/Filter'
import FilterInlineDisplay from '@/components/Filter/FilterInlineDisplay'
import TasksDisplay from '@/components/Tasks/TasksDisplay'
import HeaderWrapper from '@/layouts/HeaderWrapper'

const IndexPage = () => {
    return (
        <HeaderWrapper text="დავალებების გვერდი">
            <Filter />
            <FilterInlineDisplay />
            <TasksDisplay />
        </HeaderWrapper>
    )
}

export default IndexPage
