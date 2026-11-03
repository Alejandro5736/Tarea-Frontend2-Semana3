import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList({ inventory }) {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  // Obtener categorías únicas para el selector de filtro
  const categories = ['Todas', ...new Set(inventory.map(item => item.category))];

  // Filtrado dinámico
  const filteredProducts = selectedCategory === 'Todas'
    ? inventory
    : inventory.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-900">Listado de Inventario</h2>
        
        {/* Selector de filtro por categoría */}
        <div>
          <label className="mr-2 font-semibold text-gray-700">Filtrar por Categoría:</label>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabla de productos estilizada con Tailwind */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-3">Nombre</th>
              <th className="p-3">Marca</th>
              <th className="p-3">Categoría</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Precio</th>
              <th className="p-3 text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 font-medium text-gray-800">{product.name}</td>
                <td className="p-3 text-gray-600">{product.brand}</td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-800 text-xs px-2.5 py-1 rounded-full font-semibold">
                    {product.category}
                  </span>
                </td>
                <td className="p-3 font-semibold text-gray-700">{product.stock}</td>
                <td className="p-3 text-green-600 font-bold">${product.price}</td>
                <td className="p-3 text-center">
                  <Link 
                    to={`/producto/${product.id}`}
                    className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow"
                  >
                    Ver Detalle
                  </Link>
                </td>
              </tr>
            ))}
            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-500">
                  No hay productos en esta categoría.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;