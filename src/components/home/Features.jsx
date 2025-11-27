export default function Features() {
  const features = [
    {
      icon: "🚚",
      title: "Fast Shipping",
      description: "Get your orders delivered quickly and safely.",
      linear: "from-blue-400 to-blue-600",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      description: "Your transactions are protected with top security.",
      linear: "from-green-400 to-green-600",
    },
    {
      icon: "💯",
      title: "Quality Products",
      description: "We offer only the best quality items.",
      linear: "from-purple-400 to-purple-600",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Our team is here to help you anytime.",
      linear: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-linear-to-r ${feature.linear} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:animate-bounce transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
