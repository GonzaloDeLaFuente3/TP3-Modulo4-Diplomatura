// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';
import CartModal from './components/CartModal';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import Footer from './components/Footer';

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);// determino si el carrito esta abierto o no 
  

  return (
    // toda la aplicación pueda acceder al tema oscuro/claro.
    <ThemeProvider>
      {/* Permite manejar el estado global del carrito de compras. */}
      <CartProvider>
        <ThemeContext.Consumer>{/* ThemeContext.Consumer se usa para acceder a isDarkMode y cambiar los estilos de la app dinámicamente. */}
          {({ isDarkMode }) => (
            <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-amber-50 text-gray-900'}`}>
              
              <Header onOpenCart = {() => setIsCartOpen(true)} />    {/* permite abrir el carrito al hacer clic en el botón */}

              <ProductList /> {/* muestra los productos. */}

              {/* si isCartOpen === true, y recibe onClose para cerrarlo. */}
              {isCartOpen && <CartModal onClose = {() => setIsCartOpen(false)} />}
            </div>
          )}
          
        </ThemeContext.Consumer>
        {/* Renderizo footer */}
        <Footer />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
