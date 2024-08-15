import {
  BestSellerWrapper,
  RecProductsWrapper,
} from "@/registry/contextWrappers";
import {
  NavBar,
  Footer,
  HeroSection,
  HomeFeatures,
  UserFeedBack2,
  Newsletter,
} from "@/components";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#f6f9fc",
      }}
    >
      <NavBar />
      <main>
        <HeroSection />
        <HomeFeatures />

        {/* Best Selling Section */}
        <div
          className="p-4 mx-auto sm:px-0 my-8"
          style={{
            maxWidth: 1200,
          }}
        >
          <div className="flex flex-col justify-between">
            <span className="text-error">This Month</span>
            <h2 className="font-semibold text-3xl">Best Sellers</h2>
          </div>
          <BestSellerWrapper />
        </div>

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
