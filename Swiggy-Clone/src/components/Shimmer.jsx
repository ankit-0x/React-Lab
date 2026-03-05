export default function Shimmer() {
  return (
    <div className="flex flex-wrap gap-3 justify-center mx-30 mt-20">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="w-72 rounded-xl overflow-hidden bg-white shadow-md p-3">
            {/* Image Shimmer */}
            <div className="w-full h-48 rounded-xl bg-gray-200 animate-ping"></div>

            {/* Text Section */}
            <div className="mt-4 space-y-3">
              {/* Restaurant Name */}
              <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>

              {/* Rating + Time */}
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>

              {/* Cuisine */}
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>

              {/* Area */}
              <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
            </div>
          </div>
        ))}
    </div>
  );
}
