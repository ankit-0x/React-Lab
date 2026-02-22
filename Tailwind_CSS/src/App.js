import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-10 flex gap-5 flex-wrap">
      {[1,2,3,4,5,6,7,8,9,10].map((value)=>{
        return(<div key={value} className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className=" relative h-48">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/10/17/49a765a0-7736-4f48-a2ae-79d621a53bbb_5ca379be6c164639a58ba3ebb309011fef1474cc714748eb9af1fe933a5e0150.JPG"
            alt="Moti Mahal"
            className="w-full h-full object-cover"
          ></img>
          <h1 className="absolute bottom-3 left-4 z-10 text-white text-xl font-bold">
            Moti Mahal Delux
          </h1>
        </div>
        <div className="p-4 space-y-2">
          <div className="flex justify-between text-sm text-gray-700">
            <p>North Indian • Biryani</p>
            <p>₹2000 for two</p>
          </div>
          <div className="flex justify-between text-sm text-gray-700">
            <p>Sector 33, Delhi</p>
            <p>7.1km</p>
          </div>

          <button className="bg-gray-200 rounded-full px-3 py-1 text-sm">
            Table Booking
          </button>

          <div className="flex justify-between items-center py-2 px-3 text-sm font-semibold text-white bg-emerald-700 rounded-lg">
            <div className="flex  items-center gap-2">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"
                className="w-6 h-6"
              ></img>
              <span>Flat 20% off on pre-booking</span>
            </div>
            <span>+1 more</span>
          </div>
        </div>
      </div>);
      })}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
