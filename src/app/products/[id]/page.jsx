"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function ItemDetails({ params }) {
  const { id } = use(params);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/api/products");
        const products = await response.json();
        const foundProduct = products.find((p) => (p._id || p.id) === id);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-purple-50 to-pink-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-linear-to-r from-purple-600 to-pink-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">{error}</h1>
        <Link
          href="/products"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-purple-50 to-pink-50 py-8">
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              <Image
                src={product.image || "https://picsum.photos/600/600"}
                alt={product.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {product.title}
              </h1>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  USD
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description ||
                  "No description available for this product."}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 shadow-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3"
                  />
                </svg>
                <span>Add to Cart</span>
              </button>

              <button className="w-full border-2 border-linear-to-r from-purple-400 to-pink-400 text-purple-600 hover:bg-linear-to-r hover:from-purple-400 hover:to-pink-400 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Product Data */}
            <div className="border-t border-gray-200 pt-6 space-y-3">
              <div className="flex justify-between text-sm bg-gray-50 p-3 rounded-lg">
                <span className="text-gray-600 font-medium">Product ID:</span>
                <span className="font-mono text-gray-900 bg-white px-2 py-1 rounded">
                  {product._id || product.id}
                </span>
              </div>
              {product.createdAt && (
                <div className="flex justify-between text-sm bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-600 font-medium">Added:</span>
                  <span className="text-gray-900 bg-white px-2 py-1 rounded">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 bg-white text-purple-600 hover:bg-linear-to-r hover:from-purple-400 hover:to-pink-400 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
