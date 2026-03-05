import { useSelector,useDispatch } from "react-redux";
import { addItems, IncrementItems, DecrementItems } from "../GlobalStore/cartSlicer";

export default function RestInfo({ items }) {
    const itemsArray = useSelector(state=>state.cartslice.items);
    const element = itemsArray.find(item=>item.id==items.id);
    const count = element?element.quantity:0;
    const dispatch = useDispatch();

  const price =
    "defaultPrice" in items
      ? items?.defaultPrice / 100
      : items?.price / 100;

  function handleAddItems(){

    dispatch(addItems(items));
  }
  function handleIncrementItems(){

    dispatch(IncrementItems(items));
  }
  function handleDecrementItems(){

    dispatch(DecrementItems(items));
  }

  return (
    <div className="flex justify-between gap-6 py-6 border-b">

      {/* Left Section */}
      <div className="w-2/3 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">
          {items?.name}
        </h3>

        <p className="text-md font-medium text-gray-900">
          ₹ {price}
        </p>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-600 font-semibold">
            ★ {items?.ratings?.aggregatedRating?.rating || "0.0"}
          </span>
          <span className="text-gray-500">
            ({items?.ratings?.aggregatedRating?.ratingCountV2 || "0"})
          </span>
        </div>

        <p className="text-sm text-gray-500 line-clamp-2">
          {items?.description}
        </p>
      </div>

      {/* Right Section */}
      <div className="w-32 flex flex-col items-center">
          <img
            className="w-32 h-24 rounded-lg object-cover shadow-sm"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              items?.imageId
            }
            alt={items?.name}
      />

   {count === 0 ? (
        <button className="mt-5 px-6 py-1.5 bg-white border border-gray-400 text-green-600 font-semibold rounded-lg shadow-sm hover:bg-green-50 active:scale-95 transition" onClick={()=>handleAddItems()}>
            ADD
        </button>
    ) : (
        <div className="mt-5 px-3 py-1.5 w-24 bg-white border border-gray-400 text-green-600 font-semibold rounded-lg shadow-sm flex items-center justify-between hover:shadow-md transition">
            <button className="text-lg font-bold active:scale-90 transition" onClick={()=>handleDecrementItems()}>−</button>
            <span>{count}</span>
            <button className="text-lg font-bold active:scale-90 transition" onClick={()=>handleIncrementItems()}>+</button>
        </div>
    )}
        
      </div>

    </div>
  );
}