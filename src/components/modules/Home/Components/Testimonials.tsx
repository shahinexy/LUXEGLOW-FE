const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      text: "The body cream is amazing! My skin has never felt smoother.",
      rating: 5
    },
    {
      id: 2,
      name: "Jessica K.",
      text: "The shampoo stopped my hair fall in just 2 weeks!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily R.",
      text: "Love the sheet masks! My skin looks so radiant.",
      rating: 4
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          What Our <span className="text-primary">Customers Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-yellow-400 text-lg mb-2">
                {"⭐".repeat(review.rating)}
              </div>
              <p className="text-gray-600 text-sm mb-3">&quot;{review.text}&quot;</p>
              <p className="font-semibold text-sm">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;