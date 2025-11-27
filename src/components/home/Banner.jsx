import Link from "next/link";

export default function Banner() {
  return (
    <section className="hero min-h-screen bg-linear-to-br from-purple-600 via-pink-500 to-red-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="hero-content text-center relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-linear-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-pulse">
            Welcome to Next Store
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
            Discover amazing products at unbeatable prices. Your ultimate
            shopping destination for quality and style!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="btn bg-linear-to-r from-yellow-400 to-orange-500 text-white btn-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-500/50"
            >
              Explore Products
            </Link>
            <Link
              href="/features"
              className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-110"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
