// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';
import CartModal from './components/CartModal';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import Footer from './components/Footer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  

  return (
    <ThemeProvider>
      <CartProvider>
        <ThemeContext.Consumer>
          {({ isDarkMode }) => (
            <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-amber-50 text-gray-900'}`}>
              <Header onOpenCart={() => setIsCartOpen(true)} />
              <ProductList />
              {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
              
            </div>
            
          )}
          
        </ThemeContext.Consumer>

        <Footer />

        
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
