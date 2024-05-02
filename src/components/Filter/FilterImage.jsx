import React from "react";
import clothes from "../../assets/images/clothes.jpg";

const FilterImage = () => {
  return (
    <div>
      <img
        src={clothes}
        alt="clothes"
        className="w-[80%] mx-auto rounded-md h-[500px] object-cover object-center"
      />
    </div>
  );
};

export default FilterImage;
