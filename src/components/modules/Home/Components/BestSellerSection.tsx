"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  key_ingredients: string[];
  skin_type?: string;
  hair_type?: string;
  sizes: string[];
  price: number;
  compare_at_price?: number;
  badge?: string;
  rating?: number;
  reviews?: number;
  image_url: string;
  benefits?: string[];
  features?: string[];
  how_to_use?: string[];
}

const BestSellerSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/product.json");
        const data = await response.json();
        const productList = data.products || data;

        // Filter products with badges (BEST SELLER, NEW, HOT, etc.)
        // or you can customize the filter logic
        const filteredProducts = productList
          .filter((product: Product) => product.badge) // Only products with badges
          .slice(0, 4); // Get only 4 products

        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error loading products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Loading skeleton
  if (loading) {
    return (
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center mb-8">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 md:h-56 bg-gray-200 animate-pulse"></div>
                <div className="p-3 md:p-4 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // If no products with badges, show fallback or all products
  const displayProducts = products.length > 0 ? products : [];

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

        {displayProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No best sellers available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {displayProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 md:h-56 bg-gray-100">
                  <Image
                    src={product.image_url || "/product_images/placeholder.png"}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {product.badge && (
                    <span className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-medium text-sm md:text-base line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-primary font-bold mt-1">
                    ${product.price?.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSellerSection;