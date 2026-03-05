import GroceryCard from "./GroceryCard";
import { Grocery } from "../Utility/Grocery";

export default function GroceryOptions() {
  return (
    <div className="w-[90%] container mx-auto mt-20">
        <h1 className="text-2xl font-bold">Shop Groceries on Instamart</h1>
      <div className="container mx-auto flex overflow-x-auto flex-nowrap mt-5 gap-3">
        {Grocery?.map((item) => (
          <GroceryCard key={item.id} item={item}></GroceryCard>
        ))}
      </div>
    </div>
  );
}
