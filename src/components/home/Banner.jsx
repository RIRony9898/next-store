import Link from "next/link";

export default function Banner() {
  return (
    <div>
      <section className="text-center w-full py-24 bg-cyan-800 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Next Store</h1>
        <p className="text-lg mb-6">
          Your perfect place to find quality products
        </p>
        <Link
          href="/products"
          className="px-6 py-3 bg-white text-blue-600 rounded font-semibold"
        >
          Explore Products
        </Link>
      </section>
    </div>
  );
}
