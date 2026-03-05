import { createSlice, createAsyncThunk, asyncThunkCreator } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    "menu/fetchMenu",
    async(args, thunkAPI)=>{
        try{
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${args}`;
            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();
            return data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const menuSlice = createSlice({
    name:"menu",
    initialState:{data:null,loading:false,error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchData.pending,(state)=>{
                state.loading=true;
                state.error=null;
            })
            .addCase(fetchData.fulfilled,(state,action)=>{
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchData.rejected,(state,action)=>{
                state.error = action.payload;
                state.loading = false;
            })
    }
})

export default menuSlice.reducer;