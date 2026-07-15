/* eslint-disable react/no-unescaped-entities */
// src/app/(defaultLayout)/contact/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
    HiOutlineMail,
    HiOutlinePhone,
    // HiOutlineMapPin,
    HiOutlineClock,
    HiOutlineCheckCircle,
    HiOutlineUser,
    HiOutlineChatAlt2,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Show success toast
        toast.success("Message sent successfully!", {
            description: "We'll get back to you within 24 hours.",
            icon: <HiOutlineCheckCircle className="text-green-500" />,
            duration: 5000,
        });

        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        setIsSubmitting(false);
    };

    const whatsappNumber = "2348123456789";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20LUXEGLOW%2C%20I%20have%20a%20question%20about%20your%20products.`;

    const contactInfo = [
        {
            icon: "HiOutlineMapPin",
            title: "Visit Us",
            details: "123 Beauty Lane, Glow City, GC 12345",
        },
        {
            icon: HiOutlinePhone,
            title: "Call Us",
            details: "+1 (234) 567-890",
            link: "tel:+1234567890",
        },
        {
            icon: HiOutlineMail,
            title: "Email Us",
            details: "info@luxeglow.com",
            link: "mailto:info@luxeglow.com",
        },
        {
            icon: HiOutlineClock,
            title: "Working Hours",
            details: "Mon - Sat: 9:00 AM - 6:00 PM",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 overflow-x-auto">
                <Link href="/" className="hover:text-black transition">
                    Home
                </Link>
                <span>/</span>
                <span className="text-black font-medium">Contact Us</span>
            </nav>

            {/* Hero Section */}
            <div className="bg-black rounded-2xl p-8 md:p-12 text-white mb-12">
                <div className="max-w-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Get in <span className="text-white/70">Touch</span>
                    </h1>
                    <p className="text-lg opacity-80">
                        Have questions about our products? We'd love to hear from you.
                        Reach out and we'll get back to you as soon as possible.
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-6">
                    <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                    <div className="space-y-4">
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                            >
                                <item.icon className="text-2xl text-black mt-1" />
                                <div>
                                    <h3 className="font-semibold text-sm">{item.title}</h3>
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            className="text-gray-600 text-sm hover:text-black transition"
                                        >
                                            {item.details}
                                        </a>
                                    ) : (
                                        <p className="text-gray-600 text-sm">{item.details}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* WhatsApp Button */}
                    <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                        <h3 className="font-semibold text-sm mb-2">Quick Response</h3>
                        <p className="text-gray-600 text-sm mb-3">
                            Chat with us on WhatsApp for instant replies.
                        </p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-sm font-medium"
                        >
                            <FaWhatsapp className="text-lg" />
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                        <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Your Name *
                                    </label>
                                    <div className="relative">
                                        <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Subject *
                                </label>
                                <div className="relative">
                                    <HiOutlineChatAlt2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Product Inquiry"
                                        required
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Write your message here..."
                                    required
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 bg-black text-white font-semibold rounded-lg transition ${isSubmitting
                                    ? "opacity-70 cursor-not-allowed"
                                    : "hover:bg-gray-800"
                                    }`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Back to Home */}
            <div className="mt-12 text-center">
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

export default ContactPage;