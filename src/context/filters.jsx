import { createContext } from 'react'

// 1. Crear el contexto 
// este es el que tenemos que consumir
export const FiltersContext = createContext()

// 2. Crear el provider, para proveer el contexto
// este es el que nos provee de accesso al contexto
export function FiltersProvider ({ children }) {
    return (
        <FiltersContext.Provider value={{
            category: 'all',
            minPrice: 0
        }}>
            {children}
        </FiltersContext.Provider>
    )
}
