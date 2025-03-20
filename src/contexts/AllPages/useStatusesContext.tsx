import { useContext } from 'react'
import { appContext } from './appContext'

export const useStatusesContext = () => {
    const context = useContext(appContext)

    if (context?.statuses === undefined) {
        throw new Error('the Context needs to be invoked first...')
    }

    return context.statuses
}

export default useStatusesContext
