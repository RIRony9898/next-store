import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Happy Customer",
      message:
        "Amazing products and fast delivery! Highly recommend Next Store.",
      avatar: "https://picsum.photos/100/100?random=5",
      rating: 5,
    },
    {
      name: "Jane Smith",
      role: "Regular Buyer",
      message:
        "The quality is outstanding and the customer service is top-notch.",
      avatar: "https://picsum.photos/100/100?random=6",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      role: "Tech Enthusiast",
      message: "Found all the gadgets I needed. Great prices and selection!",
      avatar: "https://picsum.photos/100/100?random=7",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-linear-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
              style={{
                background: `linear-linear(135deg, rgba(147,51,234,0.05) 0%, rgba(219,39,119,0.05) 100%)`,
                border: "2px solid transparent",
                backgroundClip: "padding-box",
                borderImage: "linear-linear(135deg, #9333ea, #db2777) 1",
              }}
            >
              <div className="absolute top-4 left-4 text-4xl text-purple-300 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                &#8220;
              </div>
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 border-4 border-linear-to-r from-purple-400 to-pink-400"
                  width={64}
                  height={64}
                />
                <div>
                  <h4 className="font-bold text-lg text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed text-lg relative z-10">
                &#34;{testimonial.message}&#34;
              </p>
              <div className="absolute bottom-4 right-4 text-4xl text-pink-300 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                &#8221;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
