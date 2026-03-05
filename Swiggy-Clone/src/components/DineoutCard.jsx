export default function DineoutCard({ restra }) {
  const info = restra?.info;

  return (
    <div className="w-82 h-86.25 bg-white rounded-2xl shadow-lg overflow-hidden shrink-0">
      <div className="relative h-48">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            info?.mediaFiles?.[0]?.url
          }
          alt={info?.name}
          className="w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Title + Rating */}
        <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
          <h1 className="text-white text-lg font-bold truncate">
            {info?.name}
          </h1>

          <div className="flex items-center gap-1 text-white px-2 py-1 text-sm font-semibold">
            <span className="bg-green-600 rounded-full px-1.5 text-center pb-0.5">★</span>
            <span>{info?.rating?.value}</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2">
        <div className="flex justify-between text-sm text-gray-700">
          <p>{info?.cuisines?.join(" • ")}</p>
          <p>{info?.costForTwo}</p>
        </div>

        <div className="flex justify-between text-sm text-gray-700">
          <p>{info?.locationInfo?.formattedAddress}</p>
          <p>{info?.locationInfo?.distanceString}</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {info?.vendorOffer?.offerHighlights?.map((value) => (
            <div
              key={value?.logoCtx?.logo}
              className="flex items-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm"
            >
              <img
                className="w-3 h-3"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  value?.logoCtx?.logo
                }
                alt="offer"
              />
              <p>{value?.logoCtx?.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center py-2 px-3 text-sm font-semibold text-white bg-emerald-700 rounded-lg">
          <div className="flex items-center gap-2">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"
              className="w-6 h-6"
              alt="offer"
            />
            <span>
              {info?.offerInfoV3?.vendorOffer?.title}{" "}
              {info?.offerInfoV3?.vendorOffer?.subtitle}
            </span>
          </div>
          <span>{info?.offerInfoV3?.vendorOffer?.subtext}</span>
        </div>
      </div>
    </div>
  );
}
