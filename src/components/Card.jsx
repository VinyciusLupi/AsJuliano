import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../contexts/CartContext'

export default function Card({ product }) {
    const navigate = useNavigate()
    const { setCartItems } = useContext(CartContext)

    const handleAddToCart = () => {
        setCartItems(prev => [...prev, product])
        navigate('/cart')
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img className="w-full h-48 object-cover" src={product.url} alt={product.name} />
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">{product.name}</h2>
                <p className="text-lg text-blue-600 font-bold mb-4">R$ {product.price.toFixed(2)}</p>
                <div className="mt-auto flex flex-col gap-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors" onClick={handleAddToCart}>Adicionar ao carrinho</button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors" onClick={() => navigate(`/products/${product.id}`)}>Ver detalhes</button>
                </div>
            </div>
        </div>
    )
}