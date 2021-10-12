import { createContext } from 'react'

const initialContext = {
  title: undefined
}

export type TopbarContextType = {
  title?: string | undefined
}

export const TopbarContext = createContext<TopbarContextType>(initialContext)
export const TopbarContextProvider = TopbarContext.Provider