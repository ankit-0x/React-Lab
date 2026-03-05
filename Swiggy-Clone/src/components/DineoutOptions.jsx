import { dineout } from "../Utility/dineout";
import DineoutCard from "./DineoutCard";

export default function DineoutOptions(){
    return(
        <div className="w-[90%] container mx-auto mt-20">
            <h1 className="text-2xl font-bold">Discover best restaurants on Dineout</h1>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-3">
                {dineout?.map((restra)=><DineoutCard key={restra?.info?.id} restra={restra}></DineoutCard>)}
            </div>
        </div>
    )
}