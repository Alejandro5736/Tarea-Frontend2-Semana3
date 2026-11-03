import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';

function App() {
  // Estado global del inventario con categorías
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Arroz 1kg', brand: 'Tucapel', category: 'Abarrotes', stock: 45, price: 1200 },
    { id: 2, name: 'Aceite Maravilla 1L', brand: 'Gourmet', category: 'Aceites', stock: 30, price: 2500 },
    { id: 3, name: 'Leche Entera 1L', brand: 'Colun', category: 'Lácteos', stock: 60, price: 950 },
    { id: 4, name: 'Fideos Tallarín 400g', brand: 'Carozzi', category: 'Abarrotes', stock: 50, price: 1290 }
  ]);

  // Estado del carrito de compras
  const [cart, setCart] = useState([]);

  // Función para agregar al carrito y restar stock del inventario
  const addToCart = (product) => {
    if (product.stock <= 0) {
      alert("¡No hay stock disponible de este producto!");
      return;
    }

    // 1. Restar stock en el inventario general
    setInventory(inventory.map(item => 
      item.id === product.id ? { ...item, stock: item.stock - 1 } : item
    ));

    // 2. Agregar o incrementar en el carrito
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Función para actualizar cantidades desde el carrito (+ / -)
  const updateCartQuantity = (productId, delta) => {
    const cartItem = cart.find(item => item.id === productId);

    if (delta > 0) {
      // Aumentar en carrito -> verificar si hay stock en inventario
      const invItem = inventory.find(i => i.id === productId);
      if (invItem.stock <= 0) {
        alert("Stock agotado en el inventario.");
        return;
      }
      setInventory(inventory.map(i => i.id === productId ? { ...i, stock: i.stock - 1 } : i));
      setCart(cart.map(c => c.id === productId ? { ...c, quantity: c.quantity + 1 } : c));
    } else {
      // Disminuir en carrito -> devolver stock al inventario
      setInventory(inventory.map(i => i.id === productId ? { ...i, stock: i.stock + 1 } : i));
      if (cartItem.quantity > 1) {
        setCart(cart.map(c => c.id === productId ? { ...c, quantity: c.quantity - 1 } : c));
      } else {
        setCart(cart.filter(c => c.id !== productId));
      }
    }
  };

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BrowserRouter>
      {/* Barra de navegación con Tailwind */}
      <nav className="bg-green-800 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Supermercado App (Sumativa)</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:underline">Inventario</Link>
          <Link to="/carrito" className="hover:underline bg-green-700 px-3 py-1.5 rounded-lg">
            🛒 Carrito ({totalCartItems})
          </Link>
        </div>
      </nav>

      {/* Contenedor de vistas */}
      <div className="p-6 bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<ProductList inventory={inventory} />} />
          <Route path="/producto/:id" element={<ProductDetail inventory={inventory} addToCart={addToCart} />} />
          <Route path="/carrito" element={<CartPage cart={cart} updateCartQuantity={updateCartQuantity} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;