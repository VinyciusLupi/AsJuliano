import CartContext from "../contexts/CartContext";
import { useContext } from "react";

export default function Cart() {
    const { cartItems, setCartItems } = useContext(CartContext);

    const handleRemove = (indexToRemove) => {
        setCartItems(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const handleCheckout = () => {
        alert("Produtos pagos!");
        setCartItems([]);
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">Carrinho de Compras</h1>
            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-lg text-center py-8">Seu carrinho está vazio.</p>
            ) : (
                <>
                    <ul className="divide-y divide-gray-200 mb-8">
                        {cartItems.map((item, index) => (
                            <li key={index} className="py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img className="w-20 h-20 object-cover rounded shadow-sm" src={item.url} alt={item.name} />
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                        <p className="text-blue-600 font-medium">R$ {item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <button className="text-red-500 hover:text-red-700 font-medium px-3 py-1 border border-red-200 hover:bg-red-50 rounded transition-colors" onClick={() => handleRemove(index)}>Remover</button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Total: R$ {totalPrice.toFixed(2)}</h2>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105" onClick={handleCheckout}>Pagar Agora</button>
                    </div>
                </>
            )}
        </div>
    )
}