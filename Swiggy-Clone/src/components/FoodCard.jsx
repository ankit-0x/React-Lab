export default function FoodCard({item}){
    return(
        <a className="flex-none" href={item?.action?.link}>
            <img  className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item?.imageId}></img>
        </a>
    );
}