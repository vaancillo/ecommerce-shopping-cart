import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error('useCart mus be used whitin a CartProvider')
    }

    return context
}
