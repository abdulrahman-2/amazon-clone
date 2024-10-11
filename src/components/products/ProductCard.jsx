import Image from "next/image";

const ProductCard = ({ product }) => {
  const { images, price, discountPrice, discountPercentage, description } =
    product;

  // Function to truncate the description if it's too long
  const truncateDescription = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <div className="border rounded-md overflow-hidden shadow-md">
      <div className="relative bg-[#F7F8F8] p-5 h-[120px] md:h-[200px]">
        <Image
          src={images[0]}
          alt="product image"
          width={100}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-1">
        <div className="flex items-center gap-2 mb-1">
          {discountPercentage && (
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
              <span className="bg-red-600 text-xs text-white font-bold py-1 px-2">
                {`${discountPercentage}% off`}
              </span>
              <span className="text-red-500 text-xs font-bold">
                Limited time offer
              </span>
            </div>
          )}
        </div>
        <span className="text-amazon_blue text-lg font-semibold">
          <sup className="text-xs">EGP</sup>
          {price}
        </span>
        <p className="text-sm mt-1">{truncateDescription(description, 20)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
