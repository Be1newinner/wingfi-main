// import Hero from '@/components/Home/Hero';
import About from '@/components/Home/About';
import ClickChangeSwiper from '@/components/Home/ClickChangeSwiper';
import BarChart from '@/components/Home/BarChart';
import HeroSection from '@/components/Home/HeroSection';
import GadgetGallerySection from '@/components/Home/GadgetGallerySection';
import TechTreasuresSection from '@/components/Home/TechTreasuresSection';
import NewsLetterSection from '@/components/Home/NewsLetterSection';
// import PopupBox from '@/components/PopupBox';
import Product from '@/components/Home/Product';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <BarChart />
      <TechTreasuresSection />
      <ClickChangeSwiper />
      <GadgetGallerySection />
      {/* <GedgetSwiper /> */}
      <Product/>
      <NewsLetterSection />
      
      <Testimonials />
      {/* <PopupBox /> */}
    </div>
  );
}
