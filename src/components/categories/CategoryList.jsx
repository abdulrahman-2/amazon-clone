import CategoryCard from "./CategoryCard";

const CategoryList = ({ categories }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {categories.map((category) => (
        <CategoryCard
          key={category.title}
          title={category.title}
          image={category.image}
          linkName={category.linkName}
        />
      ))}
    </div>
  );
};

export default CategoryList;
