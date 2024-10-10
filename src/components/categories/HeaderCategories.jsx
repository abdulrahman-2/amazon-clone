"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

const HeaderCategories = () => {
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  return (
    <div>
      {loading ? (
        <p className="text-white">Loading categories...</p>
      ) : error ? (
        <p className="text-white">Error loading categories: {error}</p>
      ) : (
        <div className="text-sm text-white w-full">
          <div className="flex overflow-hidden gap-4">
            {categories.slice(0, 12).map((category) => (
              <div key={category} className="headerItem h-full">
                <Link href={`/${category}`}>{category.split("-")[0]}</Link>
              </div>
            ))}
            <div className="headerItem h-full">
              <Link href={"/sell"}>Sell</Link>
            </div>
            <div className="headerItem h-full">
              <Link href={"/help"}>Help</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderCategories;
