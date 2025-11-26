import Image from "next/image";
import Link from "next/link";

export default function ItemCard({ item }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <Image
        src={item.image}
        alt=""
        width={300}
        height={200}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
      <p className="font-bold mt-2">${item.price}</p>
      <Link
        href={`/products/${item.id}`}
        className="mt-2 inline-block px-4 py-1 bg-blue-600 text-white rounded"
      >
        Details
      </Link>
    </div>
  );
}
