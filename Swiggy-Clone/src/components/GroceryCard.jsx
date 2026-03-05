export default function GroceryCard({ item }) {
  return ( 
    <div className="flex-none ">
      <a href={item?.action?.link}>
        <img
          className="w-40 h-50 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            item?.imageId
          }
        ></img>
      </a>
      <h3 className="text-center font-semibold">{item?.action?.text}</h3>
    </div>
  );
}
