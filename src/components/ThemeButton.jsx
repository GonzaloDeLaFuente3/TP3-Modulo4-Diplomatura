// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ThemeButton() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <button
        onClick={toggleTheme}
        className={`p-2 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
        >
        Cambiar a modo {isDarkMode ? 'Claro' : 'Oscuro'}
        </button>
    );
}

export default ThemeButton;
