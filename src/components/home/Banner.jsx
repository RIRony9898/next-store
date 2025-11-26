import Link from "next/link";

export default function Banner() {
  return (
    <section className="hero min-h-96 bg-linear-to-r from-primary to-secondary text-white">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-6">Welcome to Next Store</h1>
          <p className="text-xl mb-8">
            Your perfect place to find quality products at unbeatable prices
          </p>
          <Link
            href="/products"
            className="btn btn-secondary btn-lg hover:btn-secondary-focus transition"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
