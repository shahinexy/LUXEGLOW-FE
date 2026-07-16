/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    HiOutlineSearch,
    HiOutlineFilter,
    HiOutlineStar,
    HiOutlineShoppingBag,
} from "react-icons/hi";

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("default");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/product.json");
                const data = await response.json();
                const productList = data.products || data;
                setProducts(productList);
                setFilteredProducts(productList);
                setLoading(false);
            } catch (error) {
                console.error("Error loading products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        let result = [...products];

        if (selectedCategory !== "all") {
            result = result.filter(
                (product: any) => product.category === selectedCategory
            );
        }

        if (searchTerm) {
            result = result.filter((product: any) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        switch (sortBy) {
            case "price-low":
                result.sort((a: any, b: any) => a.price - b.price);
                break;
            case "price-high":
                result.sort((a: any, b: any) => b.price - a.price);
                break;
            case "rating":
                result.sort((a: any, b: any) => (b.rating || 0) - (a.rating || 0));
                break;
            case "newest":
                result.sort((a: any, b: any) => (b.id || 0) - (a.id || 0));
                break;
            default:
                break;
        }

        setFilteredProducts(result);
    }, [products, selectedCategory, searchTerm, sortBy]);

    // Get unique categories
    const categories = [
        "all",
        ...new Set(products.map((product: any) => product.category)),
    ];

    // Loading skeleton
    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="bg-gray-200 rounded-xl animate-pulse">
                            <div className="h-48 md:h-56 bg-gray-300 rounded-t-xl"></div>
                            <div className="p-4 space-y-3">
                                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
            {/* Page Header */}
            <div className="mb-6 md:mb-8">
                <h1 className="text-2xl md:text-3xl font-bold">
                    Our <span className="text-primary">Products</span>
                </h1>
                <p className="text-gray-500 text-sm md:text-base">
                    Discover our range of skincare and haircare products
                </p>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8">
                {/* Search */}
                <div className="relative flex-1">
                    <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    />
                </div>

                {/* Mobile Filter Toggle */}
                <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="sm:hidden flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                    <HiOutlineFilter />
                    Filters
                </button>

                {/* Category Filter - Desktop */}
                <div className="hidden sm:flex items-center gap-2 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${selectedCategory === category
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {category === "all" ? "All" : category}
                        </button>
                    ))}
                </div>

                {/* Sort */}
                {/* <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary bg-white text-sm"
                >
                    <option value="default">Sort by</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="newest">Newest</option>
                </select> */}
            </div>

            {/* Mobile Category Filter */}
            {isFilterOpen && (
                <div className="sm:hidden flex flex-wrap gap-2 mb-4 p-4 bg-gray-50 rounded-lg">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setIsFilterOpen(false);
                            }}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategory === category
                                ? "bg-primary text-black"
                                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                                }`}
                        >
                            {category === "all" ? "All" : category}
                        </button>
                    ))}
                </div>
            )}

            {/* Results Count */}
            <div className="text-sm text-gray-500 mb-4">
                {filteredProducts.length} products found
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold mb-2">No products found</h3>
                    <p className="text-gray-500">Try adjusting your search or filters</p>
                    <button
                        onClick={() => {
                            setSearchTerm("");
                            setSelectedCategory("all");
                        }}
                        className="mt-4 px-6 py-2 bg-primary text-black rounded-full font-semibold hover:bg-primary/90 transition"
                    >
                        Clear Filters
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {filteredProducts.map((product: any, idx: number) => (
                        <Link
                            key={idx}
                            href={`/product/${product.id}`}
                            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="relative h-48 md:h-56 bg-gray-100">
                                <Image
                                    src={product.image_url}
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
                                {product.rating && (
                                    <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                        <HiOutlineStar className="text-yellow-400" />
                                        {product.rating}
                                    </span>
                                )}
                            </div>
                            <div className="p-3 md:p-4">
                                <h3 className="font-medium text-sm md:text-base line-clamp-2">
                                    {product.name}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-primary font-bold">
                                        ${product?.price}
                                    </span>
                                    <button className="p-2 bg-primary/10 hover:bg-primary rounded-full transition group-hover:bg-primary group-hover:text-white">
                                        <HiOutlineShoppingBag className="text-sm" />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ShopPage;