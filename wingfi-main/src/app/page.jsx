/** @format */

import About from '@/components/Home/About';
import ClickChangeSwiper from '@/components/Home/ClickChangeSwiper';
import BarChart from '@/components/Home/BarChart';
import HeroSection from '@/components/Home/HeroSection';
import GadgetGallerySection from '@/components/Home/GadgetGallerySection';
import TechTreasuresSection from '@/components/Home/TechTreasuresSection';
import NewsLetterSection from '@/components/Home/NewsLetterSection';
import Product from '@/components/Home/Product';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <HeroSection />
      <About />
      <BarChart />
      <TechTreasuresSection />
      <ClickChangeSwiper />
      <GadgetGallerySection />
      <Product />
      <NewsLetterSection />
      <div className="max-w-7xl mx-auto">
        <Testimonials />
      </div>
    </div>
  );
}
