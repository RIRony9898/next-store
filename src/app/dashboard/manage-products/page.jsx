import Link from "next/link";
import Protected from "@/components/ProtectedWrapper";

export default function ManageProducts() {
  const products = [
    { id: 1, title: "Product A", price: 10 },
    { id: 2, title: "Product B", price: 20 },
  ];

  return (
    <Protected>
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Manage Products</h2>

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
              <tr key={p.id} className="text-center border-b">
                <td className="p-2">{p.id}</td>
                <td className="p-2">{p.title}</td>
                <td className="p-2">${p.price}</td>
                <td className="p-2 flex justify-center gap-3">
                  <Link href={`/product/${p.id}`} className="text-blue-600">
                    View
                  </Link>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Protected>
  );
}
