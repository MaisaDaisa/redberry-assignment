import { useContext } from 'react'
import indexPageContext from './IndexPageContext'

export const usePrioritiesContext = () => {
    const context = useContext(indexPageContext)

    if (context?.priorities === undefined) {
        throw new Error('the Context needs to be invoked first...')
    }

    return context.priorities
}

export default usePrioritiesContext
