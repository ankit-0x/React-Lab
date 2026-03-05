import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../GlobalStore/restSlice";

export default function Restaurant(){
    const dispatch = useDispatch();
    const data = useSelector(state=>state.rest.data);
    const loading = useSelector(state=>state.rest.loading)

    useEffect(()=>{
       if(!data){
         dispatch(fetchRestaurants());
       }
    },[dispatch,data])

    const RestData = data?.data?.cards?.[1]?.card.card?.gridElements?.infoWithStyle?.restaurants;

    if(loading) return <Shimmer></Shimmer>

    return(
        <div className="w-[90%] container mx-auto mt-20">
                    <div className="flex flex-wrap mt-5 gap-3 justify-center">
                        {RestData?.map((restra)=><RestaurantCard key={restra?.info?.id} restra={restra}></RestaurantCard>)}
                    </div>
        </div>
    );

}