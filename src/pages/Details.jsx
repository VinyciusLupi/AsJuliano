import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import CartContext from '../contexts/CartContext'

export default function Details() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const { setCartItems } = useContext(CartContext);

    const handleAddToCart = () => {
        setCartItems(prev => [...prev, product])
        navigate('/cart')
    }

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`http://localhost:3001/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchProduct();
    }, [id]);

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {product ? (
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-64 w-full object-cover md:h-full md:w-96" src={product.url} alt={product.name} />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">Detalhes do Produto</div>
                        <h1 className="block mt-1 text-3xl leading-tight font-bold text-black mb-4">{product.name}</h1>
                        <p className="mt-2 text-gray-600 text-2xl font-semibold mb-8">R$ {product.price.toFixed(2)}</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow transition-colors w-full md:w-auto" onClick={handleAddToCart}>
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            ) : (
                <div className="p-8 text-center text-gray-500">Carregando detalhes...</div>
            )}
        </div>
    )
}