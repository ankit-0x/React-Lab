import { useSelector, useDispatch } from "react-redux";
import { IncrementItems, DecrementItems } from "../GlobalStore/cartSlicer";
import { Link } from "react-router";
import { useNavigate } from "react-router";

export default function Checkout() {
  const data = useSelector((state) => state.cartslice.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleIncrementItems(items) {
    dispatch(IncrementItems(items));
  }

  function handleDecrementItems(items) {
    dispatch(DecrementItems(items));
  }

  return (
    <div className="max-w-3xl mx-auto mt-16 bg-white shadow-lg rounded-xl p-6 relative">

      {/* Close Button */}
      <button onClick={()=>navigate(-1)} className="absolute top-4 right-4 text-red-600 text-3xl font-bold hover:text-red-800 transition">
        ×
      </button>

      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>

      <div className="space-y-6">
        {data.map((items) => (
          <div
            key={items?.id}
            className="flex justify-between gap-6 border-b pb-6"
          >

            {/* Left Section */}
            <div className="w-2/3 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {items?.name}
              </h3>

              <p className="text-md font-semibold text-gray-900">
                ₹{" "}
                {"defaultPrice" in items
                  ? items?.defaultPrice / 100
                  : items?.price / 100}
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
                className="w-32 h-24 rounded-lg object-cover shadow"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  items?.imageId
                }
                alt={items?.name}
              />

              {/* Quantity Buttons */}
              <div className="mt-4 px-3 py-1.5 w-24 bg-white border border-gray-300 text-green-600 font-semibold rounded-lg shadow flex items-center justify-between hover:shadow-md transition">

                <button
                  className="text-lg font-bold hover:text-red-500 active:scale-90 transition"
                  onClick={() => handleDecrementItems(items)}
                >
                  −
                </button>

                <span>{items.quantity}</span>

                <button
                  className="text-lg font-bold hover:text-green-700 active:scale-90 transition"
                  onClick={() => handleIncrementItems(items)}
                >
                  +
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}