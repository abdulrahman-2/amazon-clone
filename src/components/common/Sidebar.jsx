"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { HiMiniXMark } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { egyptFlag } from "@/assets";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleToggleCategories = () => {
    setShowAll(!showAll);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IoMenu
        size={35}
        className="text-white cursor-pointer"
        onClick={handleOpen}
      />

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen overflow-y-scroll w-[300px] md:w-[350px] bg-white shadow-md z-50 transition-transform duration-300 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-3 mb-3 h-[50px] w-full bg-amazon_light flex items-center justify-between">
          <span className="font-bold text-white flex items-center gap-2">
            <BsPersonCircle size={25} /> Hello, sign in
          </span>
          <HiMiniXMark
            size={35}
            className="cursor-pointer text-white"
            onClick={handleClose}
          />
        </div>
        <div className="text-black overflow-y-auto">
          <div className="p-3">
            <h3 className="text-lg font-semibold mb-3">Trending</h3>
            <ul className="flex flex-col gap-3">
              <li className="text-black text-sm">Best Sellers</li>
              <li className="text-black text-sm">New Release</li>
              <li className="text-black text-sm">Movers & Shakers</li>
            </ul>
          </div>
          <hr />
          <div className="p-3">
            <h3 className="text-lg font-semibold mb-3">
              Digital content and devices
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-black text-sm">Amazon Kindle e-readers</li>
            </ul>
          </div>
          <hr />
          <div className="p-3">
            <h3 className="text-lg font-semibold mb-3">Shop by Category</h3>
            <ul className="flex flex-col gap-3">
              {(showAll ? categories : categories.slice(0, 4)).map(
                (category) => (
                  <li key={category.id} className="text-black text-sm">
                    {category}
                  </li>
                )
              )}
            </ul>
            <button
              className="text-black text-sm mt-4 flex items-center gap-2"
              onClick={handleToggleCategories}
            >
              {showAll ? "Show Less" : "See All"}
              <RiArrowDownSLine size={20} />
            </button>
          </div>
          <hr />
          <div className="p-3">
            <h3 className="text-lg font-semibold mb-3">Programs & Features</h3>
            <ul className="flex flex-col gap-3">
              <li className="text-black text-sm">{`Today's Deals`}</li>
              <li className="text-black text-sm">Amazon Outlet</li>
              <li className="text-black text-sm">See All Amazon</li>
            </ul>
          </div>
          <hr />
          <div className="p-3">
            <h3 className="text-lg font-semibold mb-3">Help & Settings</h3>
            <ul className="flex flex-col gap-3">
              <li className="text-black text-sm">{`Today's Deals`}</li>
              <li className="text-black text-sm">Your Account</li>
              <li className="flex items-center gap-2 text-black text-sm">
                <TbWorld size={20} />
                <span>English</span>
              </li>
              <li className="flex items-center gap-2 text-black text-sm">
                <Image src={egyptFlag} alt="egypt flag" className="w-[20px]" />
                <span>Egypt</span>
              </li>
              <li className="text-black text-sm">Help</li>
              <li className="text-black text-sm">Sign in</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
