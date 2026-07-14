import BestSellerSection from "./Components/BestSellerSection";
import CategorySection from "./Components/CategorySection";
import FeaturesSection from "./Components/FeaturesSection";
import HeroSlider from "./Components/HeroSlider";
import Newsletter from "./Components/NewsletterSection";
import Testimonials from "./Components/Testimonials";


const Home = () => {
    return (
        <div>
            <HeroSlider />
            <CategorySection />
            <BestSellerSection />
            <FeaturesSection />
            <Testimonials />
            <Newsletter />
        </div>
    );
};

export default Home;