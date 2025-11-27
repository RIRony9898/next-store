const page = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Next Store
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your ultimate destination for quality products, exceptional service,
            and unforgettable shopping experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-3xl font-bold mb-4 text-purple-600">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To revolutionize online shopping by providing unparalleled
              quality, innovative products, and customer-centric service that
              exceeds expectations.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6">👁️</div>
            <h2 className="text-3xl font-bold mb-4 text-pink-600">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become the world&#39;s most trusted e-commerce platform, where
              every customer finds exactly what they need with joy and
              confidence.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
              <p>
                Lightning-fast shipping to get your orders to you quickly and
                safely.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-semibold mb-2">Premium Quality</h3>
              <p>
                Only the finest products that meet our rigorous quality
                standards.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
              <p>
                Round-the-clock customer service to assist you whenever you
                need.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Become part of a growing family of satisfied customers who trust
            Next Store for all their shopping needs.
          </p>
          <button className="btn bg-linear-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-xl">
            Start Shopping Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
