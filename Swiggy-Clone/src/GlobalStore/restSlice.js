import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchRestaurants = createAsyncThunk(
    "rest/fetchRest",
    async(_, thunkApi)=>{
        try{
            const proxyServer = "https://cors-anywhere.herokuapp.com/";

            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response. json();
            return data;
        }catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

const restSlice = createSlice({
    name:"rest",
    initialState:{data:null,loading:false,error:null},
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchRestaurants.pending,(state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRestaurants.fulfilled,(state,action)=>{
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchRestaurants.rejected,(state,action)=>{
                state.error = action.payload;
                state.loading = false;
            })
    }
})

export {fetchRestaurants};
export default restSlice.reducer;