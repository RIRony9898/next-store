const Categories = () => {
  const categories = [
    {
      name: "Electronics",
      icon: "📱",
      linear: "from-blue-400 to-blue-600",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
    },
    {
      name: "Clothing",
      icon: "👕",
      linear: "from-pink-400 to-pink-600",
      hoverColor: "hover:from-pink-500 hover:to-pink-700",
    },
    {
      name: "Home & Garden",
      icon: "🏠",
      linear: "from-green-400 to-green-600",
      hoverColor: "hover:from-green-500 hover:to-green-700",
    },
    {
      name: "Sports",
      icon: "⚽",
      linear: "from-orange-400 to-orange-600",
      hoverColor: "hover:from-orange-500 hover:to-orange-700",
    },
  ];

  return (
    <div className="py-16 bg-linear-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600">
            Explore our diverse range of products
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-linear-to-r ${category.linear} ${category.hoverColor} transition-all duration-300 opacity-90 group-hover:opacity-100`}
              ></div>
              <div className="relative card-body items-center text-center p-8 text-white">
                <div className="text-6xl mb-4 group-hover:animate-bounce">
                  {category.icon}
                </div>
                <h3 className="card-title text-2xl font-bold mb-4">
                  {category.name}
                </h3>
                <button className="btn bg-white text-gray-800 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
