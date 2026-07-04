import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const nameRef = useRef()
    const priceRef = useRef()
    const urlRef = useRef()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!nameRef.current.value || !priceRef.current.value || !urlRef.current.value) {
            nameRef.current.focus()
            return
        }
        if (isNaN(priceRef.current.value)) {
            priceRef.current.focus()
            return
        }
        if (!urlRef.current.value.startsWith('http')) {
            urlRef.current.focus()
            return
        }

        const newProduct = {
            name: nameRef.current.value,
            price: parseFloat(priceRef.current.value),
            url: urlRef.current.value
        }

        try {
            const response = await fetch('http://localhost:3001/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })

            if (response.ok) {
                navigate('/')
            } else {
                alert('Erro ao cadastrar produto')
            }
        } catch (error) {
            console.error('Erro:', error)
            alert('Erro ao cadastrar produto')
        }
    }

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="mb-6 border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-800">Cadastro de Produto</h1>
                <p className="text-gray-500 mt-2">Adicione um novo produto à loja</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Produto:</label>
                    <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" type="text" ref={nameRef} placeholder="Ex: Teclado Mecânico" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preço (R$):</label>
                    <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" type="text" ref={priceRef} placeholder="Ex: 199.99" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">URL da Imagem:</label>
                    <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" type="text" ref={urlRef} placeholder="https://..." />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md shadow transition-colors" type="submit">Cadastrar Produto</button>
            </form>
        </div>
    )
}