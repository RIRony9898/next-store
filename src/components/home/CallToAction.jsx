const CallToAction = () => {
  return (
    <div
      className="hero min-h-[60vh] relative overflow-hidden"
      style={{
        background: "linear-linear(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-red-600 opacity-90"></div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="hero-content text-center relative z-10">
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold text-white mb-6 animate-pulse">
            Ready to Shop?
          </h1>
          <p className="py-6 text-xl text-white/90 leading-relaxed">
            Discover amazing products at unbeatable prices. Join thousands of
            satisfied customers today!
          </p>
          <button className="btn btn-lg bg-white text-purple-600 hover:bg-purple-100 hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 font-bold px-8 py-3 rounded-full">
            Get Started
          </button>
        </div>
      </div>
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-pink-300/20 rounded-full animate-pulse"></div>
    </div>
  );
};

export default CallToAction;
