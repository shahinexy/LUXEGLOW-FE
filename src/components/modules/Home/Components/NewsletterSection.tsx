const Newsletter = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Subscribe to Our <span className="text-primary">Newsletter</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-6">
          Get the latest updates on new products and special offers
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;