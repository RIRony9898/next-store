export default function Features() {
  const features = [
    {
      icon: "🚚",
      title: "Fast Shipping",
      description: "Get your orders delivered quickly and safely.",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      description: "Your transactions are protected with top security.",
    },
    {
      icon: "💯",
      title: "Quality Products",
      description: "We offer only the best quality items.",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Our team is here to help you anytime.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
