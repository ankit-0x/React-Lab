import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const FetchData = createAsyncThunk(
    'coin/fetch',
    async (args, thunkAPI)=>{
        try{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data = await response.json();
            return data;
        }
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)

const coinSlicer = createSlice({
    name: 'slice1',
    initialState: {data:[] , loading:false , error:null},
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(FetchData.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(FetchData.fulfilled, (state,action)=>{
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(FetchData.rejected, (state,action)=>{
                state.error = action.payload;
                state.loading = false;
            })
    }
})

export {FetchData};
export default coinSlicer.reducer;