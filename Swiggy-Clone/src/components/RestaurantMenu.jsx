import { useState, useEffect } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../GlobalStore/menuSlice";

export default function RestaurantMenu() {
  const [selected, setSelected] = useState(null);
  let { id } = useParams();

  const dispatch = useDispatch();
  const data = useSelector(state=>state.menu.data);
  

  useEffect(() => {
        dispatch(fetchData(id));
  }, [id,dispatch]);

  const tempData = data?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const filterData = tempData?.filter((item) => "title" in item?.card?.card);

  return (
    <div className="max-w-5xl mx-auto px-4 mb-24">
        <Link to={`/city/delhi/${id}/search`}>
            <div className="bg-gray-200 w-full h-10 mt-20 text-gray-500 font-semibold text-xl flex items-center justify-center rounded-2xl">
            <p>Search for dishes</p>
        </div>
        </Link>
        
      {/* Filter Buttons */}
      <div className="flex gap-4 my-10">
        <button
          className={`text-lg font-semibold px-6 py-2 rounded-full border border-green-600 text-green-600 bg-gray-200 shadow-sm ${selected == "veg" ? "bg-green-600 text-white" : "bg-gray-200 text-green-600"}`}
          onClick={() => setSelected(selected == "veg" ? null : "veg")}
        >
          Veg
        </button>

        <button
          className={`text-lg font-semibold px-6 py-2 rounded-full border border-red-500 text-red-500  bg-gray-200 shadow-sm ${selected == "nonveg" ? "bg-red-500 text-white" : "bg-gray-200 text-red-500"}`}
          onClick={() => setSelected(selected == "nonveg" ? null : "nonveg")}
        >
          Non-Veg
        </button>
      </div>

      {/* Menu Cards */}
      <div className="space-y-6">
        {filterData?.map((menuitems) => (
          <MenuCard
            key={menuitems?.card?.card?.title}
            menuitems={menuitems?.card?.card}
            foodSelected={selected}
          />
        ))}
      </div>
    </div>
  );
}
