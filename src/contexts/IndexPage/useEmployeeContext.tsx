import { useContext } from 'react'
import indexPageContext from './IndexPageContext'

export const useEmployeeContext = () => {
    const context = useContext(indexPageContext)

    if (context?.employees === undefined) {
        throw new Error('the Context needs to be invoked first...')
    }

    return context.employees
}

export default useEmployeeContext
