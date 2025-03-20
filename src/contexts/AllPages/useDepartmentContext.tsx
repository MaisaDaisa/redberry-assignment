import { useContext } from 'react'
import { appContext } from './appContext'

export const useDepartmentsContext = () => {
    const context = useContext(appContext)

    if (context?.departments === undefined) {
        throw new Error('the Context needs to be invoked first...')
    }

    return context.departments
}

export default useDepartmentsContext
