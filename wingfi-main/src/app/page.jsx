import {
  NavBar,
  Footer,
  HeroSection,
  HomeFeatures,
  UserFeedBack2,
  Newsletter,
  BestSellerWrapper,
  RecProductsWrapper,
} from '@/components';
import Link from 'next/link';
import CategoryList from '../components/Category/CategoryList';

export default function Home() {
  return (
    <div className="bg-[#f6f9fc]">
      <NavBar />
      <main>
        <HeroSection />
        <CategoryList />

        {/* Best Selling Section */}
        <div className="lg:px-[100px] px-[20px]  py-[50px]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-between">
              <span className="text-error font-bold text-sm	">This Month</span>
              <h2 className="font-semibold text-2xl">Best Sellers</h2>
            </div>

            <div className="flex justify-between items-center">
              <Link href={'/'} className="py-2 px-4 bg-red-500 text-white rounded-full">
                View More
              </Link>
            </div>
          </div>
          <BestSellerWrapper />
        </div>

        <HomeFeatures />

        {/* Buy Top Rated Prod Sections */}
        <div
          className="pt-0 mx-auto p-4 sm:p-0 mb-8 mt-16"
          style={{
            maxWidth: 1200,
          }}
        >
          <div className="flex justify-between">
            <h2 className="font-semibold text-xl">Recommended by Us</h2>
          </div>
          <RecProductsWrapper />
        </div>

        <UserFeedBack2 />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
