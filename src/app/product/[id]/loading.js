import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-[110px]">
      <div
        className={`border-4 border-t-4 border-gray-200 border-t-black h-28 w-28 rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Loading;
