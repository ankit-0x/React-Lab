import { Link } from "react-router";

export default function RestaurantCard({ restra }) {
  const { info } = restra;

  return (
    <Link to={"/city/delhi/"+info?.id}>
      <div className="w-72 rounded-xl overflow-hidden bg-white transform transition duration-200 hover:scale-95">
        {/* Image Section */}
        <div className="relative">
          <img
            className="w-full h-48 object-cover rounded-xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              info.cloudinaryImageId
            }
            alt={info.name}
          />

          {/* Overlay Discount Text */}
          {info?.aggregatedDiscountInfoV3 && (
            <div className="absolute bottom-3 left-3 text-white font-extrabold text-lg drop-shadow-lg">
              {info.aggregatedDiscountInfoV3.header}{" "}
              {info.aggregatedDiscountInfoV3.subHeader}
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="mt-3 px-2 pb-3">
          <h2 className="font-bold text-lg">{info.name}</h2>

          <div className="flex items-center gap-2 text-sm font-semibold mt-1">
            <span className="bg-green-600 text-white px-2 py-0.5 rounded-full text-xs">
              ★ {info.avgRating}
            </span>
            <span>• {info.sla.slaString}</span>
          </div>

          <p className="text-gray-600 text-sm mt-1 truncate">
            {info.cuisines.join(", ")}
          </p>

          <p className="text-gray-500 text-sm">{info.areaName}</p>
        </div>
      </div>
    </Link>
  );
}
