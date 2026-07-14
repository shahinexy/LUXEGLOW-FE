"use client";
import Link from "next/link";
import Image from "next/image";

const BestSellerSection = () => {
  const products = [
    {
      id: 1,
      name: "Lightning Body Cream",
      image: "/slider_images/body-cream.png",
      price: "$24.99",
      link: "/product/body-cream",
      badge: "BEST SELLER"
    },
    {
      id: 2,
      name: "Argan Oil Shampoo",
      image: "/slider_images/shampoo.png",
      price: "$19.99",
      link: "/product/shampoo",
      badge: "NEW"
    },
    {
      id: 3,
      name: "Lightning Face Serum",
      image: "/slider_images/face-serum.png",
      price: "$29.99",
      link: "/product/face-serum",
      badge: "HOT"
    },
    {
      id: 4,
      name: "Sheet Mask Collection",
      image: "/slider_images/sheet-mask.png",
      price: "$12.99",
      link: "/product/sheet-mask",
      badge: null
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Best <span className="text-primary">Sellers</span>
          </h2>
          <Link href="/shop" className="text-primary hover:underline text-sm font-medium">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.link}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 md:h-56 bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-medium text-sm md:text-base">{product.name}</h3>
                <p className="text-primary font-bold mt-1">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;