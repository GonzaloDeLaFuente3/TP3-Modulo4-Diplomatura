// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import laptop from '../assets/laptop.jpg'
import auriculares from '../assets/auriculares.png'
import monitor from '../assets/monitor.jpg'
import mouse from '../assets/mouse.jpg'
import mouse_pad from '../assets/mouse-pad.jpg'
import teclado from '../assets/teclado.jpg'

const products = [
    { id: 1, name: "Laptop", price: 900000, image:laptop },
    { id: 2, name: "Auriculares", price: 20000, image:auriculares },
    { id: 3, name: "Mouse", price: 30000, image:mouse },
    { id: 4, name: "Teclado", price: 900000, image:teclado },
    { id: 5, name: "Mouse Pad", price: 9000, image:mouse_pad },
    { id: 6, name: "Monitor", price: 500000, image:monitor }
];

function ProductList() {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
            {products.map((product) => (
                
                <div key={product.id} className="bg-blue-100 border p-4 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-200  flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center flex-grow">{product.name}</h3>

                <div className="relative aspect-w-16 aspect-h-9">
                    <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover object-center rounded-xl"
                    />
                </div>

                <p className="text-gray-600 font-bold text-xl text-center">${product.price}</p>
                <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 mt-2 cursor-pointer"
                >
                    Agregar al carrito
                </button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
