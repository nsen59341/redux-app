import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "User Slice",
    initialState: {
        user: null,
        loading: false,
        error: false,
        param: 1
    },
    reducers: {
        setUser: (state, compObj) => {
            state.user = compObj.payload;
            state.loading = false;
            state.error= false;
        },
        setLoading: (state) => {
            state.loading = true;
            state.error= false;
        },
        setError: (state) => {
            state.loading = false;
            state.error= true;
        },
        setParam: (state, compObj) => {
            state.param = compObj.payload;
        }
    }
});

export default userSlice;