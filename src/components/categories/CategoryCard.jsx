import Image from "next/image";

const CategoryCard = ({ title, image, linkName }) => {
  return (
    <div className="p-5 shadow-md bg-white rounded-md flex flex-col justify-between gap-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <Image src={image} alt={title} className="w-full h-full object-cover" />
      <span className="text-[#0987ED]">{linkName}</span>
    </div>
  );
};

export default CategoryCard;
