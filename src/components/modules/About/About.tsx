/* eslint-disable react/no-unescaped-entities */

"use client";
import Link from "next/link";
import {
    HiOutlineCheck,
    HiOutlineHeart,
    HiOutlineSparkles,
    HiOutlineShieldCheck,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const AboutPage = () => {
    const whatsappNumber = "2348123456789";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20LUXEGLOW%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products.`;

    const values = [
        {
            icon: HiOutlineHeart,
            title: "Skin Confidence Over Perfection",
            description:
                "We believe you don't need flawless skin to be beautiful. Our products help you feel like the best version of yourself.",
        },
        {
            icon: HiOutlineSparkles,
            title: "Quality & Efficacy",
            description:
                "We use high-quality, effective ingredients to deliver real, visible results you can see and feel.",
        },
        {
            icon: HiOutlineShieldCheck,
            title: "Integrity & Transparency",
            description:
                "We're committed to honest, trustworthy products and a brand experience you can rely on.",
        },
    ];

    const stats = [
        { number: "15+", label: "Products" },
        { number: "1000+", label: "Happy Customers" },
        { number: "4.8", label: "Average Rating" },
        { number: "50+", label: "5-Star Reviews" },
    ];

    const ingredients = [
        { name: "Niacinamide" },
        { name: "Vitamin C" },
        { name: "Vitamin E" },
        { name: "Hyaluronic Acid" },
        { name: "Argan Oil" },
        { name: "Aloe Vera" },
        { name: "Shea Butter" },
        { name: "Glycerin" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 overflow-x-auto">
                <Link href="/" className="hover:text-black transition">
                    Home
                </Link>
                <span>/</span>
                <span className="text-black font-medium">About Us</span>
            </nav>

            {/* Hero Section */}
            <div className="relative rounded-2xl overflow-hidden mb-12 md:mb-16">
                <div className="bg-black p-8 md:p-12 lg:p-16 text-white">
                    <div className="max-w-3xl">
                        <div className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-white/10">
                            ✦ Glow Beyond Beauty
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Our Story Starts With{" "}
                            <span className="text-white/70">You</span>
                        </h1>
                        <p className="text-lg md:text-xl opacity-80 leading-relaxed">
                            LUXEGLOW was born from a simple, powerful belief:{" "}
                            <span className="font-semibold text-white">
                                true confidence starts with how you care for yourself.
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Our <span className="text-black/70">Mission</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Our brand was created to help you build confidence. After personally
                        struggling with skin concerns like hyperpigmentation and experiencing
                        the stress it can cause, we realized that the beauty industry often
                        focuses on quick fixes instead of genuine skin health.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        This realization sparked our mission: to create effective,
                        science-backed skincare that supports healthy skin and empowers you
                        to choose yourself every day. We're not just selling products;
                        we're building a community that encourages self-love and celebrates
                        natural beauty.
                    </p>
                </div>
                <div className="bg-gray-100 rounded-2xl overflow-hidden h-64 md:h-auto relative">
                    <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                        <div className="text-center p-8">
                            <div className="text-6xl mb-3">✦</div>
                            <h3 className="text-xl font-bold text-black">LUXEGLOW</h3>
                            <p className="text-gray-500">Glow Beyond Beauty</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 rounded-xl p-4 md:p-6 text-center border border-gray-100"
                    >
                        <div className="text-2xl md:text-3xl font-bold text-black">
                            {stat.number}
                        </div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Our Values Section */}
            <div className="mb-12 md:mb-16">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Our <span className="text-black/70">Values</span>
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Everything we do is guided by these core principles
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                        >
                            <value.icon className="text-3xl text-black mb-3" />
                            <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Key Ingredients Section */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-12 md:mb-16 border border-gray-100">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Key <span className="text-black/70">Ingredients</span>
                    </h2>
                    <p className="text-gray-500 mt-2">
                        We use high-quality, effective ingredients in all our products
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {ingredients.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-3 md:p-4 text-center shadow-sm border border-gray-100"
                        >
                            <div className="text-sm font-medium text-gray-700">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-12 md:mb-16">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Why Choose <span className="text-black/70">LUXEGLOW</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-start gap-3">
                        <HiOutlineCheck className="text-black text-xl mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Dermatologically Tested</h3>
                            <p className="text-sm text-gray-500">
                                Safe and effective for all skin types
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <HiOutlineCheck className="text-black text-xl mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Natural Ingredients</h3>
                            <p className="text-sm text-gray-500">
                                Enriched with vitamins and plant-based extracts
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <HiOutlineCheck className="text-black text-xl mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Visible Results</h3>
                            <p className="text-sm text-gray-500">
                                See results in just days of consistent use
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <HiOutlineCheck className="text-black text-xl mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Cruelty-Free</h3>
                            <p className="text-sm text-gray-500">
                                Never tested on animals
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-black rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Ready to <span className="text-white/70">Glow</span>?
                </h2>
                <p className="opacity-70 mb-6 max-w-md mx-auto">
                    Explore our collection and start your journey to radiant, confident skin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/shop"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition"
                    >
                        Shop Now
                    </Link>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition border border-white/20"
                    >
                        <FaWhatsapp className="text-xl" />
                        Chat on WhatsApp
                    </a>
                </div>
            </div>

            {/* Back to Home */}
            <div className="mt-8 text-center">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-black hover:underline font-medium"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export default AboutPage;