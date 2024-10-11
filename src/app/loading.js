import React from "react";

const Loading = ({ color = "gray-500", width = 12, height = 12 }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div
        className={`border-4 border-t-4 border-gray-200 rounded-full animate-spin`}
        style={{
          borderTopColor: color,
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
    </div>
  );
};

export default Loading;
