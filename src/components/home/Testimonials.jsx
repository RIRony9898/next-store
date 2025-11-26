import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Happy Customer",
      message:
        "Amazing products and fast delivery! Highly recommend Next Store.",
      avatar: "https://picsum.photos/100/100?random=5",
    },
    {
      name: "Jane Smith",
      role: "Regular Buyer",
      message:
        "The quality is outstanding and the customer service is top-notch.",
      avatar: "https://picsum.photos/100/100?random=6",
    },
    {
      name: "Mike Johnson",
      role: "Tech Enthusiast",
      message: "Found all the gadgets I needed. Great prices and selection!",
      avatar: "https://picsum.photos/100/100?random=7",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                  width={48}
                  height={48}
                />
                <div>
                  <h4 className="font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&#34;{testimonial.message}&#34;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
