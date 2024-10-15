"use client";

import Link from "next/link";
import Loading from "@/app/loading";
import Sidebar from "../common/Sidebar";
import { getCategoriesList } from "@/lib/data/categoiresData";
import { useEffect, useState } from "react";

const HeaderCategories = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const fetchCategoriesList = async () => {
      try {
        const data = await getCategoriesList();
        setCategoriesList(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategoriesList();
  });

  return (
    <div>
      <div className="flex items-center gap-4 w-full text-white">
        <div className="hidden md:flex items-center gap-2">
          <Sidebar categoriesList={categoriesList} />
        </div>
        <Link href="/categories" className="headerItem h-full flex-shrink-0">
          All Categories
        </Link>
        {categoriesList.slice(0, 10).map((category) => (
          <Link
            key={category}
            href={`/${category}`}
            className="headerItem h-full flex-shrink-0"
          >
            {category}
          </Link>
        ))}
        <Link href="/sell" className="headerItem h-full flex-shrink-0">
          Sell
        </Link>
        <Link href="/help" className="headerItem h-full flex-shrink-0">
          Help
        </Link>
      </div>
    </div>
  );
};

export default HeaderCategories;
