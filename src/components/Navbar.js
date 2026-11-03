import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ totalCartItems }) {
  return (
    <nav className="bg-green-800 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Supermercado App (Sumativa)</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Inventario</Link>
        <Link to="/carrito" className="hover:underline bg-green-700 px-3 py-1.5 rounded-lg">
          🛒 Carrito ({totalCartItems})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;