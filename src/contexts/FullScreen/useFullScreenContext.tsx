import { useContext } from 'react'
import { fullScreenContext } from './fullScreenContext'

export const useFullScreenContext = () => {
    const context = useContext(fullScreenContext)

    if (context?.toggleFullScreen === undefined) {
        throw new Error('the Context needs to be invoked first...')
    }

    return context.toggleFullScreen
}

export default useFullScreenContext
