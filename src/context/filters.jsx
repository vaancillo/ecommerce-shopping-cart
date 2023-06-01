import { createContext, useState } from 'react'

// 1. Crear el contexto 
// este es el que tenemos que consumir
export const FiltersContext = createContext()

// 2. Crear el provider, para proveer el contexto
// este es el que nos provee de accesso al contexto
// eslint-disable-next-line react/prop-types
export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 250
    })
    return (
        <FiltersContext.Provider value={{
            filters, 
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}
