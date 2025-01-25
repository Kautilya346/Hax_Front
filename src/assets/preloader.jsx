import React from 'react';

const preloader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#f5f2e5] bg-opacity-75 z-50">
      <div className="w-16 h-16 border-4 border-t-4 border-[#DC483A] border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default preloader;
