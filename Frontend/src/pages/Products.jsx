import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/products', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    const data = await res.json();
    console.log('Fetched products:', data);
    setProducts(data);
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};



  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      const data = await res.json();
      if (res.ok) {
        setProducts(products.filter((p) => p._id !== id));
        alert('Product deleted');
      } else {
        alert(data.message || 'Failed to delete');
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow bg-white">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-green-600 font-bold mt-2">₹ {product.price}</p>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => deleteProduct(product._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
              {/* Add Edit Button */}
              <button
                onClick={() => window.location.href = `/products/edit/${product._id}`}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
