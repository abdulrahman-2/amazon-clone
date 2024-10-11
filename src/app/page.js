import BudgetList from "@/components/BudgetList";
import CarouselBanner from "@/components/CarouselBanner";
import CategoryList from "@/components/categories/CategoryList";
import ProductsList from "@/components/products/ProductsList";
import ShoppingPerks from "@/components/ShoppingPerks";
import {
  deals,
  gamingCategories,
  offers,
  organizersCategories,
} from "@/data/categoriesCard";

const Home = () => {
  return (
    <main>
      <CarouselBanner />

      <div className="-mt-[100px] md:-mt-[415px] relative z-30 mb-5">
        <CategoryList categories={offers} />
      </div>

      <div className="-mt-5">
        <CategoryList categories={deals} />
      </div>

      <ProductsList
        start={0}
        end={8}
        title={"Shop Today's Deals"}
        linkName={"See All Deals"}
      />

      <BudgetList />

      <div className="-mt-5">
        <CategoryList categories={gamingCategories} />
      </div>

      <ShoppingPerks />

      <div className="-mt-5">
        <ProductsList
          start={8}
          end={16}
          title={"Deals Under 250 EGP"}
          linkName={"See All Deals"}
        />
      </div>

      <div className="-mt-5">
        <CategoryList categories={organizersCategories} />
      </div>
    </main>
  );
};

export default Home;
