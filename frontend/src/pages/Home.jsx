import Hero from "../components/home/Hero.jsx";
import CategorySection from "../components/home/CategorySection.jsx";
import SpacesShowcase from "../components/home/SpacesShowcase.jsx";
import FeaturedProducts from "../components/home/FeaturedProducts.jsx";
import ShowroomGallery from "../components/home/ShowroomGallery.jsx";
import InstagramReels from "../components/home/InstagramReels.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs.jsx";
import CustomerTypes from "../components/home/CustomerTypes.jsx";
import FAQSection from "../components/home/FAQSection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <SpacesShowcase />
      <FeaturedProducts />
      <ShowroomGallery />
      <InstagramReels />
      <WhyChooseUs />
      <CustomerTypes />
      <FAQSection />
    </>
  );
}
