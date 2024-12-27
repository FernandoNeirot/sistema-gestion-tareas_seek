import React from "react";

const Loading = () => {
  return (
    <div className=" absolute top-0 left-0 flex items-center justify-center h-full w-full">
      <div className=" w-full h-full bg-gray-900 bg-opacity-50 relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-28 w-28 border-t-2 border-b-2 border-blue-500 absolute" />
        <div className="animate-spin rounded-full h-20 w-20 border-t-1 border-b-2 border-blue-300 absolute" />
        <div className="animate-spin rounded-full h-10 w-10 border-t-1 border-b-2 border-blue-100 absolute" />
      </div>
    </div>
  );
};

export default Loading;
