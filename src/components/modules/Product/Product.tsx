/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/product/[id]/page.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
    HiOutlineStar,
    HiOutlineCheck,
    HiOutlinePhone,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

// Define Product Type
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

const Product = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<string>("description");
    const params = useParams();
    const productId = params.id;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch("/product.json");
                const data = await response.json();
                const productList = data.products || data;
                const foundProduct: Product | undefined = productList.find(
                    (p: Product) => p.id === Number(productId)
                );
                setProduct(foundProduct || null);
                setLoading(false);
            } catch (error) {
                console.error("Error loading product:", error);
                setLoading(false);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    const whatsappNumber = "2348123456789";
    const whatsappMessage = `Hello, I'm interested in ${product?.name || "this product"}. Can I get more information?`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Loading skeleton
    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                        <div className="h-80 md:h-96 lg:h-[500px] bg-gray-200 rounded-xl animate-pulse"></div>
                    </div>
                    <div className="lg:w-1/2 space-y-4">
                        <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                        <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                        <div className="h-12 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        );
    }

    // Product not found
    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
                <p className="text-gray-500 mb-6">The product you're looking for doesn't exist.</p>
                <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                    ← Back to Shop
                </Link>
            </div>
        );
    }

    // Tabs configuration
    const tabs = [
        { id: "description", label: "Description" },
        { id: "ingredients", label: "Ingredients" },
        { id: "how-to-use", label: "How to Use" },
    ];

    // Add benefits tab if benefits exist
    if (product.benefits && product.benefits.length > 0) {
        tabs.splice(2, 0, { id: "benefits", label: "Benefits" });
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 overflow-x-auto">
                <Link href="/" className="hover:text-primary transition">Home</Link>
                <span>/</span>
                <Link href="/shop" className="hover:text-primary transition">Shop</Link>
                <span>/</span>
                <Link href={`/shop?category=${product.category}`} className="hover:text-primary transition">
                    {product.category}
                </Link>
                <span>/</span>
                <span className="text-gray-700 font-medium truncate">{product.name}</span>
            </nav>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Product Image Section */}
                <div className="lg:w-1/2">
                    <div className="sticky top-24">
                        <div className="relative h-80 md:h-96 lg:h-[500px] bg-gray-100 rounded-2xl overflow-hidden">
                            <Image
                                src={product.image_url || "/product_images/placeholder.png"}
                                alt={product.name}
                                fill
                                className="object-contain p-6 md:p-8"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            />
                            {product.badge && (
                                <span className="absolute top-4 left-4 bg-primary text-black text-sm font-semibold px-3 py-1.5 rounded-full">
                                    {product.badge}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="lg:w-1/2 space-y-6">
                    {/* Category */}
                    <div className="text-sm font-medium text-primary">{product.category}</div>

                    {/* Name */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{product.name}</h1>

                    {/* Rating */}
                    {product.rating && (
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <HiOutlineStar
                                        key={i}
                                        className={`text-lg ${i < Math.floor(product.rating || 0) ? "fill-current" : ""
                                            }`}
                                    />
                                ))}
                                <span className="text-sm font-medium text-gray-700 ml-1">
                                    {product.rating}
                                </span>
                            </div>
                            <span className="text-sm text-gray-500">
                                ({product.reviews || 0} reviews)
                            </span>
                        </div>
                    )}

                    {/* Price */}
                    <div className="flex items-center gap-3">
                        <span className="text-3xl md:text-4xl font-bold text-primary">
                            ${product.price?.toFixed(2)}
                        </span>
                        {product.compare_at_price && (
                            <span className="text-lg text-gray-400 line-through">
                                ${product.compare_at_price?.toFixed(2)}
                            </span>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>

                    {/* Sizes Available */}
                    {product.sizes && product.sizes.length > 0 && (
                        <div>
                            <h3 className="font-semibold mb-2">Available Sizes:</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((size: string) => (
                                    <span
                                        key={size}
                                        className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium"
                                    >
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Key Ingredients */}
                    {product.key_ingredients && product.key_ingredients.length > 0 && (
                        <div>
                            <h3 className="font-semibold mb-2">Key Ingredients:</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.key_ingredients.map((ingredient: string, index: number) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                                    >
                                        {ingredient}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Skin Type / Hair Type */}
                    {(product.skin_type || product.hair_type) && (
                        <div className="text-sm">
                            <span className="font-semibold">Suitable for: </span>
                            <span className="text-gray-600">
                                {product.skin_type || product.hair_type}
                            </span>
                        </div>
                    )}

                    {/* Features */}
                    {product.features && product.features.length > 0 && (
                        <div>
                            <h3 className="font-semibold mb-2">Features:</h3>
                            <ul className="space-y-1">
                                {product.features.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                                        <HiOutlineCheck className="text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* WhatsApp Contact Button */}
                    <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-3">
                            📞 For more information about this product, contact us on WhatsApp:
                        </p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                        >
                            <FaWhatsapp className="text-xl" />
                            <span>Chat with us on WhatsApp</span>
                            <HiOutlinePhone className="text-lg" />
                        </a>
                        <p className="text-xs text-gray-400 mt-2">
                            Click to chat with our team for product details, pricing, and availability.
                        </p>
                    </div>
                </div>
            </div>

            {/* Product Details Tabs */}
            <div className="mt-12 md:mt-16">
                <div className="flex border-b border-gray-200 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 md:px-6 py-3 text-sm font-medium capitalize whitespace-nowrap transition ${activeTab === tab.id
                                    ? "border-b-2 border-primary text-primary"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="py-6">
                    {/* Description Tab */}
                    {activeTab === "description" && (
                        <div>
                            <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        </div>
                    )}

                    {/* Benefits Tab */}
                    {activeTab === "benefits" && product.benefits && (
                        <div>
                            <h3 className="font-semibold mb-3">Product Benefits</h3>
                            <ul className="space-y-2">
                                {product.benefits.map((benefit: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-primary font-bold">✓</span>
                                        <span className="text-gray-600">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Ingredients Tab */}
                    {activeTab === "ingredients" && (
                        <div>
                            <h3 className="font-semibold mb-3">Key Ingredients</h3>
                            <ul className="space-y-2">
                                {product.key_ingredients?.map((ingredient: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-primary font-bold">•</span>
                                        <span className="text-gray-600">{ingredient}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* How to Use Tab */}
                    {activeTab === "how-to-use" && (
                        <div>
                            <h3 className="font-semibold mb-3">How to Use</h3>
                            {product.how_to_use && product.how_to_use.length > 0 ? (
                                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                                    {product.how_to_use.map((step: string, index: number) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ol>
                            ) : (
                                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                                    <li>Apply to clean, dry skin</li>
                                    <li>Massage gently until fully absorbed</li>
                                    <li>Use daily for best results</li>
                                    <li>Visible results in just days</li>
                                </ol>
                            )}
                            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <p className="text-sm text-yellow-800">
                                    💡 For best results, use consistently as part of your daily skincare routine.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Back to Shop Button */}
            <div className="mt-8 text-center">
                <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                    ← Back to Shop
                </Link>
            </div>
        </div>
    );
};

export default Product;