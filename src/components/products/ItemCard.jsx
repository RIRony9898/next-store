import Image from "next/image";
import Link from "next/link";

export default function ItemCard({ item }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-105 hover:-translate-y-2 transition-all duration-500">
      <div className="relative overflow-hidden">
        <Image
          src={item.image || "https://picsum.photos/300/200"}
          alt={item.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3 bg-linear-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          New
        </div>
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white/90 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
            ⭐ Featured
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-purple-600 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-3xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ${item.price}
            </p>
            <span className="text-xs text-gray-500">Free shipping</span>
          </div>
          <Link
            href={`/products/${item._id || item.id}`}
            className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
