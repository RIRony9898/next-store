"use client";
import Protected from "@/components/ProtectedWrapper";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

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
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setProducts(products.filter((p) => p._id !== id));
      } else {
        setErrorMsg("Failed to delete product");
      }
    } catch (err) {
      setErrorMsg("Something went wrong");
    }
  };

  return (
    <Protected>
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Manage Products</h2>

        {errorMsg && <p className="text-red-600 mb-3">{errorMsg}</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">ID</th>
                <th className="p-2">Title</th>
                <th className="p-2">Price</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="text-center border-b">
                  <td className="p-2">{p._id.slice(-6)}</td>
                  <td className="p-2">{p.title}</td>
                  <td className="p-2">${p.price}</td>
                  <td className="p-2 flex justify-center gap-3">
                    <Link href={`/products/${p._id}`} className="text-blue-600">
                      View
                    </Link>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Protected>
  );
}
