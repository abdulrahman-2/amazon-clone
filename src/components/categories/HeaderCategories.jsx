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
        <div className="flex gap-4 w-full text-white">
          {categories.slice(0, 14).map((category) => (
            <Link
              key={category}
              href={`/${category}`}
              className="headerItem h-full flex-shrink-0"
            >
              {category.split("-")[0]}
            </Link>
          ))}
          <Link href="/sell" className="headerItem h-full flex-shrink-0">
            Sell
          </Link>
          <Link href="/help" className="headerItem h-full flex-shrink-0">
            Help
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderCategories;
