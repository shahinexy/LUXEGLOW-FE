"use client";
import Link from "next/link";
import Image from "next/image";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Body Care",
      image: "/category_images/body-oil.png",
      link: "/shop?category=body-care",
      products: ["Body Cream", "Body Lotion"]
    },
    {
      id: 2,
      name: "Face Care",
      image: "/category_images/face-care.png",
      link: "/shop?category=face-care",
      products: ["Face Serum", "Face Cream", "Face Wash"]
    },
    {
      id: 3,
      name: "Hair Care",
      image: "/category_images/hair-care.png",
      link: "/shop?category=hair-care",
      products: ["Shampoo", "Conditioner"]
    },
    {
      id: 4,
      name: "Sheet Masks",
      image: "/category_images/face-mask.png",
      link: "/shop?category=masks",
      products: ["Tomato", "Aloe Vera", "Honey", "Ice Cooling"]
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Shop by <span className="text-primary">Category</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-40 md:h-48 bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 md:p-4 text-center">
                <h3 className="font-semibold text-sm md:text-base">{category.name}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {category.products.join(" • ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;