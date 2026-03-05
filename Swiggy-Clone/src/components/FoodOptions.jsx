import FoodCard from "./FoodCard";
import { FoodData } from "../Utility/FoodData";

export default function FoodOptions() {
  return (
    <div className="w-[90%] container mx-auto mt-20 ">
      <h1 className="text-2xl font-bold">Order our best food options</h1>
      <div className="overflow-x-auto container mx-auto">
        <div className="  grid grid-rows-2 grid-flow-col w-max gap-5">
          {FoodData?.map((item) => (
            <FoodCard key={item.id} item={item}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
}
