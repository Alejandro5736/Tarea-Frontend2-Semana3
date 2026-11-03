import React from 'react';

function CategoryFilter({ selectedCategory, setSelectedCategory, categories }) {
  return (
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
  );
}

export default CategoryFilter;