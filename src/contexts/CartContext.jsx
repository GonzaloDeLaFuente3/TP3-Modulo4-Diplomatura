import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();//creo el context 

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {//proveedor que encapsula la logica del carrito y recibe children querepresenta los componentes hijos que tedran aceeso al context
    //estado inicial de carrito 
    const [cart, setCart] = useState(() => {
        //cart almacena la lista de productos del carrito
        //cargo del localstorage
        return JSON.parse(localStorage.getItem("cart")) || [];
    });

    //cada vez que cambie cart actualizo el localstorage 
    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    //agregar producto al carrito 
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);//busco si esxiste el producto en el carrito
            if (existingProduct) {//el producto esta en el carrito 
                //recorro prevCart, si el item.id coincide con product.id , creo una nueva copia del objecto con quantity + 1 sino lo dejo como estaba 
                //en otras palabras si es un producto existente en el carrito solo aumento la cantidad
                // función de callback que se ejecuta para cada elemento item en el array prevCart. 
                // item es cada producto en el carrito.
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    //si es verdadero copio las propiedades del producto original y actualizo la propiedad quantity sumando 1
                );
            } else {
                //sino esta en el carrito lo agrego con una cantidad de 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        //filtro para dejar los productos que no coincidan con el id que se quiere eliminar 
        setCart((prevCart) => prevCart.filter((product) => product.id !== id));
    };

    //actualizar la cantidad del producto 
    const updateQuantity = (id, quantity) => {
        setCart((prevCart) =>
            //busco el producto y actualizo su cantidad 
            prevCart.map((product) =>
                //Math.max(1, quantity) para asegurarse de que la cantidad mínima sea 1 (no permite valores negativos o 0).
                product.id === id ? { ...product, quantity: Math.max(1, quantity) } : product
            )
        );
    };

    //calcular el precio total - reduce es para recorrer el array cart y acumular el total 
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    const clearCart = ()=> {
        setCart([]);
        
    };

    //Retorno del CartContext.Provider
    return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalPrice, clearCart }}>
         {/* representa los componentes hijos que podrán acceder al contexto. */}
        {children}
    </CartContext.Provider>
    );
};
