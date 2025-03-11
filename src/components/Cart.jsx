// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Cart() {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <>
                <ul>
                    {cart.map((product) => (
                    <li key={product.id} className="flex justify-between items-center mb-2">
                        <span>{product.name}</span>
                        <div className="flex items-center space-x-2">
                        <button
                            onClick={() => updateQuantity(product.id, product.quantity - 1)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            -
                        </button>
                        <span>{product.quantity}</span>
                        <button
                            onClick={() => updateQuantity(product.id, product.quantity + 1)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            +
                        </button>
                        <button
                            onClick={() => removeFromCart(product.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Eliminar
                        </button>
                        </div>
                    </li>
                    ))}
                </ul>
                <p className="mt-4 text-xl font-semibold">Total: ${totalPrice}</p>
                </>
            )}
        </div>
    );
}

export default Cart;
