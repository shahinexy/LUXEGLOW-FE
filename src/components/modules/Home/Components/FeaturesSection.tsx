import Image from "next/image";
import Link from "next/link";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: "🧪",
      title: "Dermatologically Tested",
      description: "Safe and effective for all skin types"
    },
    {
      id: 2,
      icon: "🌿",
      title: "Natural Ingredients",
      description: "Enriched with Niacinamide, Vitamin E & more"
    },
    {
      id: 3,
      icon: "✨",
      title: "Visible Results",
      description: "See results in just days"
    },
    {
      id: 4,
      icon: "🌍",
      title: "Cruelty-Free",
      description: "Never tested on animals"
    }
  ];

  return (
    <section className="space-y-10 md:space-y-16 md:mb-24 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:my-24 my-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="text-center p-4 md:p-6">
              <div className="text-3xl md:text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-sm md:text-base">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Link href={"/product/14"}>
        <Image src={"/slider_images/mid-baner.png"} alt="image" height={800} width={1900} className="rounded-2xl" />
      </Link>
    </section>
  );
};

export default FeaturesSection;