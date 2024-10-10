import CarouselBanner from "@/components/CarouselBanner";
import CategoryList from "@/components/categories/CategoryList";
import { deals, offers } from "@/data/categoriesCard";

const Home = () => {
  return (
    <main>
      <CarouselBanner />
      <div className="md:-mt-[410px] relative z-30 mb-5">
        <CategoryList categories={offers} />
      </div>
      <div className="mb-5">
        <CategoryList categories={deals} />
      </div>
    </main>
  );
};

export default Home;
