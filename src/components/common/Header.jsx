import { cartIcon, egyptFlag, logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import Search from "../Search";
import SignInBtn from "../SignInBtn";
import HeaderCategories from "../categories/HeaderCategories";

const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      {/* top header  */}
      <div className="px-3 bg-amazon_blue h-[60px] flex items-center gap-1 md:gap-3">
        <IoMenu
          size={35}
          className="text-white cursor-pointer block lg:hidden"
        />
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="w-[90px] lg:w-[120px] object-cover headerItem"
            priority
          />
        </Link>
        <div className="hidden lg:flex items-center headerItem text-xs">
          <HiOutlineLocationMarker size={20} className="text-white" />
          <div className="flex flex-col">
            <span className="text-amazon_lightText font-medium">
              Delivering to New Cairo...
            </span>
            <span className="text-white text-[13px] font-bold">
              Update location
            </span>
          </div>
        </div>
        <div className="hidden lg:block flex-1">
          <Search />
        </div>
        <div className="hidden lg:flex items-center justify-center gap-1 h-[80%] headerItem font-semibold text-white">
          <Image src={egyptFlag} alt="egypt flag" className="w-[20px]" />
          EN
          <RiArrowDropDownFill size={25} />
        </div>
        <div className="hidden lg:flex flex-col justify-end items-start headerItem text-white text-xs font-medium">
          <SignInBtn />
          <div className="flex items-center font-bold">
            <p className="text-[13px]">Accounts & Links</p>
            <RiArrowDropDownFill size={25} />
          </div>
        </div>
        <Link
          href="/orders"
          className="text-white hidden lg:flex items-center justify-center h-[80%] headerItem font-semibold"
        >
          Orders
        </Link>
        <div className="flex items-center gap-2 ml-auto">
          <div className="lg:hidden flex items-center text-white text-sm">
            <span className="flex items-center">
              sign in
              <RiArrowDropRightLine
                size={20}
                className="text-amazon_orangeDark"
              />
            </span>
            <MdPersonOutline size={30} className="text-white" />
          </div>
          <Link
            href="/cart"
            className="text-white headerItem font-semibold flex"
          >
            <Image
              src={cartIcon}
              alt="cart"
              className="w-auto h-11 object-cover"
            />
            <span className="self-end">Cart</span>
            <span className="absolute right-[67px] top-[20px] text-sm text-amazon_orangeDark">
              0
            </span>
          </Link>
        </div>
      </div>
      <div className="px-3 bg-black h-auto lg:hidden block py-2">
        <Search />
      </div>

      {/* bottom header  */}

      <div className="px-3 bg-amazon_light h-[40px] flex items-center">
        <HeaderCategories />
      </div>
    </div>
  );
};

export default Header;
