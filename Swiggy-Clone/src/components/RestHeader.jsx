import {useSelector} from "react-redux";
import {Link} from "react-router";

export default function RestHeader() {
    const counter = useSelector(state=>state.cartslice.count);
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-[90%] md:w-[80%] mx-auto flex items-center justify-between h-16">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-orange-500 tracking-wide cursor-pointer">
          Swiggy
        </h1>

        {/* Cart Section */}
       <Link to="/checkout">
            <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-lg font-semibold text-gray-700 group-hover:text-green-500 transition duration-300">
                Cart
            </span>

            {/* Cart Badge Example */}
            <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {counter}
            </div>
            </div>
       </Link>

      </div>
    </header>
  );
}