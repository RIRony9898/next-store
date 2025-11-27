"use client";
import Protected from "@/components/ProtectedWrapper";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products`);
        const products = await res.json();
        const product = products.find((p) => p._id === id);
        if (product) {
          setTitle(product.title || "");
          setShortDesc(product.description || "");
          setFullDesc(product.fullDescription || "");
          setPrice(product.price || "");
          setImage(product.image || "");
        } else {
          setErrorMsg("Product not found");
        }
      } catch (err) {
        setErrorMsg("Failed to load product");
      } finally {
        setFetchLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  const handleSubmit = async () => {
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    if (!title || !shortDesc || !fullDesc || !price) {
      setErrorMsg("Please fill all required fields");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`/api/products?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description: shortDesc,
          fullDescription: fullDesc,
          price: Number(price),
          image,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg("Product updated successfully!");
        setTimeout(() => router.push("/dashboard/manage-products"), 2000);
      } else {
        setErrorMsg(data.error || "Failed to update product");
      }
    } catch (err) {
      setErrorMsg("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) {
    return (
      <Protected>
        <div className="min-h-screen bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900 py-12 px-4 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
        </div>
      </Protected>
    );
  }

  return (
    <Protected>
      <div className="min-h-screen bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Edit Product
              </h2>
              <p className="text-gray-300">
                Update the details of your product
              </p>
            </div>

            {successMsg && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3">
                <div className="text-green-400 text-xl">✓</div>
                <p className="text-green-300 font-medium">{successMsg}</p>
              </div>
            )}

            {errorMsg && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3">
                <div className="text-red-400 text-xl">⚠</div>
                <p className="text-red-300 font-medium">{errorMsg}</p>
              </div>
            )}

            <form className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Product Title <span className="text-red-400">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter product title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Short Description <span className="text-red-400">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Brief description of the product"
                  value={shortDesc}
                  onChange={(e) => setShortDesc(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Full Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Detailed description of the product"
                  rows="4"
                  value={fullDesc}
                  onChange={(e) => setFullDesc(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Price <span className="text-red-400">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="0.00"
                  type="number"
                  step="0.01"
                  min="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Image URL
                </label>
                <input
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="https://example.com/image.jpg"
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 py-4 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Updating Product...</span>
                    </>
                  ) : (
                    <span>Update Product</span>
                  )}
                </button>
                <button
                  onClick={() => router.push("/dashboard/manage-products")}
                  className="flex-1 py-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Protected>
  );
}
