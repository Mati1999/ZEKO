import React from "react";

const Proyecto = ({ img, titulo, text }) => {
  return (
    <div className="w-70 rounded p-2 md:w-[40%] lg:w-[50%]">
      <img className="w-full h-55 rounded-xl" src={img} alt="" loading="lazy" />
      <h4 className="font-medium text-md my-1">{titulo}</h4>
      <p className="text-gray-500 text-sm">{text}</p>
    </div>
  );
};

export default Proyecto;
