import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail({ inventory, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscar el producto correspondiente al ID dinámico de la URL
  const product = inventory.find(item => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-12">
        <p className="text-xl text-red-600 font-semibold">Artículo no encontrado.</p>
        <button 
          onClick={() => navigate('/')} 
          className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
        >
          Volver al Inventario
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 mt-6">
      <h2 className="text-3xl font-bold text-green-900 mb-4">{product.name}</h2>
      
      <div className="space-y-3 text-gray-700 mb-6 text-lg">
        <p><strong>Marca:</strong> {product.brand}</p>
        <p><strong>Categoría:</strong> <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-sm font-semibold">{product.category}</span></p>
        <p><strong>Stock Disponible:</strong> <span className={`font-bold ${product.stock > 0 ? 'text-gray-800' : 'text-red-600'}`}>{product.stock} unidades</span></p>
        <p className="text-2xl font-extrabold text-green-600">Precio: ${product.price}</p>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <button 
          onClick={() => navigate(-1)} 
          className="bg-gray-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors"
        >
          ← Volver
        </button>
        <button 
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          className={`px-6 py-2.5 rounded-lg text-white font-bold shadow transition-colors ${
            product.stock === 0 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-700 hover:bg-green-800'
          }`}
        >
          {product.stock === 0 ? 'Sin Stock' : 'Agregar al Carrito 🛒'}
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;