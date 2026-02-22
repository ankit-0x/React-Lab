import FoodCard from "./FoodCard";

const foodData = [
  {
    id: 1,
    food: "Burger",
    value: 120,
    rating: 4.3,
    category: "Fast Food",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 2,
    food: "Pizza",
    value: 250,
    rating: 4.6,
    category: "Italian",
    img: "https://tse1.mm.bing.net/th/id/OIP.e19262DWNWeLEY3r3BQ9mQHaEJ?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 3,
    food: "Pasta",
    value: 180,
    rating: 4.2,
    category: "Italian",
    img: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
  },
  {
    id: 4,
    food: "Biryani",
    value: 220,
    rating: 4.7,
    category: "Indian",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
  },
  {
    id: 5,
    food: "Fries",
    value: 90,
    rating: 4.1,
    category: "Snacks",
    img: "https://images.unsplash.com/photo-1576107232684-1279f390859f",
  },
  {
    id: 6,
    food: "Momos",
    value: 110,
    rating: 4.4,
    category: "Chinese",
    img: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa",
  },
  {
    id: 7,
    food: "Noodles",
    value: 140,
    rating: 4.0,
    category: "Chinese",
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
  },
  {
    id: 8,
    food: "Sandwich",
    value: 100,
    rating: 4.2,
    category: "Fast Food",
    img: "https://images.unsplash.com/photo-1553909489-cd47e0907980",
  },
  {
    id: 9,
    food: "Dosa",
    value: 130,
    rating: 4.5,
    category: "South Indian",
    img: "https://images.unsplash.com/photo-1630383249896-424e482df921",
  },
  {
    id: 10,
    food: "Ice Cream",
    value: 80,
    rating: 4.6,
    category: "Dessert",
    img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a",
  },
];

function Cards() {
  return (
    <div className="cards-container">
      {foodData.map((item) => (
        <div key={item.id}>
          <FoodCard data={item} />
        </div>
      ))}
    </div>
  );
}

export default Cards;
