import Protected from "@/components/ProtectedWrapper";

export default function AddProduct() {
  return (
    <Protected>
      <div className="max-w-lg mx-auto p-6 bg-white rounded shadow mt-10">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>

        <input className="w-full border p-2 mb-3" placeholder="Title" />
        <input
          className="w-full border p-2 mb-3"
          placeholder="Short Description"
        />
        <textarea
          className="w-full border p-2 mb-3"
          placeholder="Full Description"
        />
        <input className="w-full border p-2 mb-3" placeholder="Price" />
        <input className="w-full border p-2 mb-3" placeholder="Image URL" />

        <button className="w-full py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </div>
    </Protected>
  );
}
