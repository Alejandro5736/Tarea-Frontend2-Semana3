import React from 'react';
import { Link } from 'react-router-dom';

function CartPage({ cart, updateCartQuantity }) {
  const totalGeneral = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tu carrito está vacío</h2>
        <p className="text-gray-500 mb-6">Aún no has agregado artículos para la compra.</p>
        <Link to="/" className="bg-green-700 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-green-800 shadow">
          Explorar Inventario
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 mt-6">
      <h2 className="text-2xl font-bold text-green-900 mb-6">Carrito de Compras</h2>

      <div className="divide-y divide-gray-200">
        {cart.map(item => (
          <div key={item.id} className="py-4 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
              <p className="text-sm text-gray-500">Precio unitario: ${item.price}</p>
            </div>

            {/* Controles para aumentar / disminuir */}
            <div className="flex items-center space-x-3 bg-gray-50 p-2 rounded-lg border border-gray-200">
              <button 
                onClick={() => updateCartQuantity(item.id, -1)}
                className="bg-red-500 text-white w-7 h-7 rounded font-bold hover:bg-red-600 flex items-center justify-center transition-colors"
              >
                -
              </button>
              <span className="font-bold text-lg w-6 text-center">{item.quantity}</span>
              <button 
                onClick={() => updateCartQuantity(item.id, 1)}
                className="bg-green-600 text-white w-7 h-7 rounded font-bold hover:bg-green-700 flex items-center justify-center transition-colors"
              >
                +
              </button>
            </div>

            <div className="text-right">
              <p className="font-bold text-green-700 text-lg">${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
        <div>
          <span className="text-gray-600 text-sm">Total a pagar:</span>
          <h3 className="text-3xl font-extrabold text-green-900">${totalGeneral}</h3>
        </div>
        <button 
          onClick={() => alert("¡Compra procesada con éxito! El inventario ha sido actualizado.")}
          className="bg-green-700 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-green-800 shadow-lg transition-colors"
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default CartPage;