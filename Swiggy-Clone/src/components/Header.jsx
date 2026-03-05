import { Link } from "react-router";

export default function Header(){
    return(
        <header className="bg-[#ff5200] font-serif">
            <div className="flex justify-between py-8 container mx-auto">
                <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
                <div className="text-white font-bold text-base flex gap-10 items-center">
                    <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                    <a href="https://partner.swiggy.com/food/login" target="_blank">Partner with us</a>
                    <a  className="border border-white py-3 px-4 rounded-2xl" href="" target="_blank">Get the App</a>
                    <a  className="border border-black bg-black py-3 px-4 rounded-2xl" href="" target="_blank">Sign In</a>
                </div>
            </div>
            <div className="pt-16 pb-8 relative">
                <img className="h-110 w-60 absolute left-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-110 w-60 absolute  right-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="max-w-[60%] text-5xl text-white font-bold container mx-auto">
                    Order Food and groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="max-w-[70%] container mx-auto flex  justify-center items-center gap-5 mt-10">
                    <input className="bg-white w-[30%] text-lg px-6 py-4 rounded-2xl text-left" placeholder="Enter your delivery location"></input>
                    <input className="bg-white w-[45%] text-lg px-6 py-4 rounded-2xl text-left" placeholder="Search for restaurants, item or more"></input>
                </div>
            </div>
            <div className="max-w-[80%] container mx-auto flex">
                    <Link to="/restaurants">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                    </Link>
                    <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
                    </a>
                    <a href="https://www.swiggy.com/dineout">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                    </a>
            </div>
        </header>
    );
}