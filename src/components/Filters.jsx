import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import './Filters.css'

// eslint-disable-next-line react/prop-types
export function Filters () {
    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState =>({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        // ⬇ ESTO HUELE MAL
        // estamos pasando la funcion de actualiar estado
        // nativa de REACT a un componente hijo
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor='price'>Precio a partir de:</label>
                <input 
                type='range'
                id={minPriceFilterId}
                min='0'
                max='1000'
                onChange={handleChangeMinPrice}
                value={filters.min}
                 />
                 <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>
        </section>
    )
}