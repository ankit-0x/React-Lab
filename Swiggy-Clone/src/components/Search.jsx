import { useState, useEffect } from "react";
import { useParams } from "react-router";
import RestInfo from "./RestInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../GlobalStore/menuSlice";

export default function Search() {
  const [food, setFood] = useState("");
  let { id } = useParams();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.menu.data);

  useEffect(() => {
    dispatch(fetchData(id));
  }, [id, dispatch]);

  // Get Restaurant Name
  const restName = data?.data?.cards?.[0]?.card?.card?.text;
  // 2️⃣ Get REGULAR cards
  const regularCards =
    data?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // 3️⃣ Filter cards having title
  const titledCards = regularCards?.filter((card) => card?.card?.card?.title);

  // 4️⃣ Extract items from itemCards
  const itemsFromItemCards = titledCards
    .filter((card) => card?.card?.card?.itemCards)
    .map((card) => card.card.card.itemCards)
    .flat()
    .map((item) => item?.card?.info);

  // 5️⃣ Extract items from categories
  const itemsFromCategories = titledCards
    .filter((card) => card?.card?.card?.categories)
    .map((card) => card.card.card.categories)
    .flat()
    .map((category) => category?.itemCards)
    .flat()
    .map((item) => item?.card?.info);

  // 6️⃣ Combine both arrays
  const finalData = [...itemsFromItemCards, ...itemsFromCategories];

  if (food.length > 1) {
    const seenIds = new Set();
    const filteredData = finalData.filter((item) =>
      item.name.toLowerCase().includes(food.toLowerCase()),
    );
    const finalFilteredData = filteredData.filter((item) => {
      if (seenIds.has(item.id)) {
        return false;
      }
      seenIds.add(item.id);
      return true;
    });
    return (
      <div className="w-[80%] mx-auto mt-20">
        <div>
          <input
            type="text"
            className="w-full border h-10 rounded-full text-center "
            placeholder={`Search in ${restName}`}
            value={food}
            onChange={(e) => setFood(e.target.value)}
          ></input>
        </div>
        <div>
          {finalFilteredData.map((item) => (
            <RestInfo key={item.id} items={item}></RestInfo>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-[80%] mx-auto mt-20">
      <div>
        <input
          type="text"
          className="w-full border h-10 rounded-full text-center "
          placeholder={`Search in ${restName}`}
          value={food}
          onChange={(e) => setFood(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
