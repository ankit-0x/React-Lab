import RestInfo from "./RestInfo";
import { useState } from "react";

export default function MenuCard({ menuitems,foodSelected }) {
  const [isOpen, setIsOpen] = useState(true);

  // If it has categories (Parent Section)
  if ("categories" in menuitems) {
    return (
      <div className="w-full mt-12">
        <h2 className="text-3xl font-bold mb-6 border-b pb-3">
          {menuitems?.title}
        </h2>

        <div className="space-y-6">
          {menuitems?.categories.map((items) => (
            <MenuCard key={items?.title} menuitems={items} foodSelected={foodSelected} />
          ))}
        </div>
      </div>
    );
  }

  if(!isOpen){
    return(
        <div className="w-full bg-white rounded-xl shadow-sm p-4 ">

      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">
          {menuitems?.title}
        </h3>

        <span className="text-xl font-bold ">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t mt-6"></div>
    </div>
    );
  }

  if(foodSelected=="veg"){
    return (
    <div className="w-full bg-white rounded-xl shadow-sm p-4 ">

      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">
          {menuitems?.title}
        </h3>

        <span className="text-xl font-bold ">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {/* Content */}
        <div className="space-y-4">
          {menuitems?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items) => (
            <RestInfo
              key={items?.card?.info?.id}
              items={items?.card?.info}
            />
          ))}
        </div>

      {/* Divider */}
      <div className="border-t mt-6"></div>
    </div>
  );
  }
  
  if(foodSelected=="nonveg"){
    return (
    <div className="w-full bg-white rounded-xl shadow-sm p-4 ">

      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">
          {menuitems?.title}
        </h3>

        <span className="text-xl font-bold ">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {/* Content */}
        <div className="space-y-4">
          {menuitems?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((items) => (
            <RestInfo
              key={items?.card?.info?.id}
              items={items?.card?.info}
            />
          ))}
        </div>

      {/* Divider */}
      <div className="border-t mt-6"></div>
    </div>
  );
  }

  // Normal Accordion Section
  return (
    <div className="w-full bg-white rounded-xl shadow-sm p-4 ">

      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">
          {menuitems?.title}
        </h3>

        <span className="text-xl font-bold ">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {/* Content */}
        <div className="space-y-4">
          {menuitems?.itemCards?.map((items) => (
            <RestInfo
              key={items?.card?.info?.id}
              items={items?.card?.info}
            />
          ))}
        </div>

      {/* Divider */}
      <div className="border-t mt-6"></div>
    </div>
  );
}