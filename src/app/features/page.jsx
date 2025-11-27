const page = () => {
  const features = [
    {
      icon: "🚚",
      title: "Lightning Fast Delivery",
      description:
        "Experience ultra-fast shipping with our premium delivery network. Get your orders delivered within 24-48 hours anywhere in the country.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      description:
        "Your financial security is our top priority. We use bank-level encryption and multiple payment gateways for safe transactions.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description:
        "Every product in our store undergoes rigorous quality checks. We only offer items that meet our high standards of excellence.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: "💬",
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is available round the clock. Get instant help through chat, email, or phone whenever you need it.",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      description:
        "Not satisfied? No problem! Enjoy hassle-free returns within 30 days of purchase with our flexible return policy.",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: "🎁",
      title: "Exclusive Deals",
      description:
        "Unlock special discounts and exclusive offers available only to our valued customers. Save more with every purchase.",
      color: "from-red-400 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Amazing Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes Next Store the ultimate shopping destination.
            Experience shopping like never before!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`inline-block p-4 rounded-2xl bg-linear-to-r ${feature.color} text-white text-4xl mb-6 group-hover:animate-bounce`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-r from-purple-600 via-pink-500 to-red-500 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who have discovered the Next
            Store advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Start Shopping Now
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
