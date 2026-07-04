import { useState, useEffect } from 'react'
import Card from '../components/Card'

export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
                const response = await fetch('http://localhost:3001/products')
                const data = await response.json()
                setProducts(data);
        };

            fetchProducts();
        }, []);

    return (
        <>
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Página Inicial</h1>
            <section>
                <h2 className="text-2xl font-semibold mb-6 text-gray-700">Produtos em destaque</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Card key={product.id} product={product}/>   
                    ))}
                </div>
            </section>
        </div>
        </>
    )
}