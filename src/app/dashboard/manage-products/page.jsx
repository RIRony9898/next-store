"use client";
import Protected from "@/components/ProtectedWrapper";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setErrorMsg("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      setErrorMsg("");
      setSuccessMsg("");
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setProducts(products.filter((p) => p._id !== id));
        setSuccessMsg("Product deleted successfully!");
        setTimeout(() => setSuccessMsg(""), 3000);
      } else {
        setErrorMsg("Failed to delete product");
      }
    } catch (err) {
      setErrorMsg("Something went wrong");
    }
  };

  return (
    <Protected>
      <div className="min-h-screen bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Manage Products
              </h2>
              <p className="text-gray-300">
                View, edit, and manage all your products
              </p>
            </div>

            {successMsg && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <p className="text-green-300 font-medium">{successMsg}</p>
              </div>
            )}

            {errorMsg && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-300 font-medium">{errorMsg}</p>
              </div>
            )}

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                  No Products Found
                </h3>
                <p className="text-gray-400 mb-6">
                  Start by adding your first product to the store
                </p>
                <Link
                  href="/dashboard/add-product"
                  className="inline-block px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Add First Product
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-6 text-gray-300 font-semibold">
                        Product
                      </th>
                      <th className="text-left py-4 px-6 text-gray-300 font-semibold">
                        Price
                      </th>
                      <th className="text-center py-4 px-6 text-gray-300 font-semibold">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p, index) => (
                      <tr
                        key={p._id}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                              {p.title.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">
                                {p.title}
                              </h3>
                              <p className="text-gray-400 text-sm">
                                ID: {p._id.slice(-8)}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-2xl font-bold bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                            ${p.price}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex justify-center space-x-3">
                            <Link
                              href={`/products/${p._id}`}
                              className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-all duration-300 transform hover:scale-105 border border-blue-500/30"
                            >
                              View
                            </Link>
                            <button
                              onClick={() => handleDelete(p._id)}
                              className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all duration-300 transform hover:scale-105 border border-red-500/30"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {products.length > 0 && (
              <div className="mt-8 text-center">
                <Link
                  href="/dashboard/add-product"
                  className="inline-block px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Add New Product
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Protected>
  );
}
