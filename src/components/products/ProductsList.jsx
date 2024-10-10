"use client";

import { fetchProducts } from "@/redux/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <div></div>;
};

export default ProductsList;
