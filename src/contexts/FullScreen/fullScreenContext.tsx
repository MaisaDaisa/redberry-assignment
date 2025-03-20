import { createContext } from 'react'

export type fullScreenContextType = {
    toggleFullScreen: () => void
}

export const fullScreenContext = createContext<
    fullScreenContextType | undefined
>(undefined)

export default fullScreenContext
