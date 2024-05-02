import React from "react";
import { storeData } from "../../assets/data/dummyData";
import FrontCard from "./FrontCard";
import FrontFooter from "./FrontFooter";

const FrontImage = () => {
  return (
    <>
      <div className="flex items-center justify-center m-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {storeData.slice(0, 6).map((store) => {
            return <FrontCard key={store.id} store={store} />;
          })}
        </div>
      </div>
      <FrontFooter />
    </>
  );
};

export default FrontImage;
