import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpeg';
import { ThemeContext } from '../contexts/ThemeContext';
import { CartContext } from '../contexts/CartContext';

// eslint-disable-next-line react/prop-types
function Header({ onOpenCart }) {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { cart } = useContext(CartContext);
    const [isRotating, setIsRotating] = React.useState(false);

    React.useEffect(() => {
        const rotationInterval = setInterval(() => {
        setIsRotating(true);
        setTimeout(() => {
            setIsRotating(false);
        }, 2000);
        }, 12000);

        return () => clearInterval(rotationInterval);
    }, []);

    return (
        <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={` text-black p-4 mb-5 z-50 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-yellow-300'}`}
        >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <motion.img
                src={logo}
                alt="Logo"
                className="w-[60px] rounded-full"
                animate={{ rotate: isRotating ? 360 : 0 }}
                transition={{
                duration: 2,
                ease: "linear",
                repeat: isRotating ? Infinity : 0,
                }}
            />
            <h1 className="text-2xl font-bold mt-2 sm:mt-0">Tienda de Productos</h1>
            </div>
            <div className="flex space-x-4">
            <motion.button
                onClick={toggleTheme}
                className={`bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mt-4 sm:mt-0 cursor-pointer ${
                isDarkMode ? 'bg-white text-gray-900 hover:text-white' : 'bg-blue-500 text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Modo {isDarkMode ? 'Claro' : 'Oscuro'}
            </motion.button>
            <motion.button
                onClick={onOpenCart}
                className={`bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mt-4 sm:mt-0 cursor-pointer ${
                isDarkMode ? 'bg-white text-gray-900 hover:text-white' : 'bg-blue-500 text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                
            >
                Carrito ({cart.length})
            </motion.button>
            </div>
        </div>
        </motion.header>
    );
}

export default Header;
