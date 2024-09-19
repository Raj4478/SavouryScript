import { createSlice } from "@reduxjs/toolkit";



const initialState = {


    status :false,
    search:null,
    id:null,
    loggedin:false
}

const auth = createSlice({

    name:"auth",
    initialState,
    reducers:{
        input:(state,action)=>{

            state.status = true;
            state.search = action.payload.search
            state.id = action.payload.id
           
        },
        logged:(state,action)=>{


            state.loggedin = true
        }


    }
})

export const {input,logged} = auth.actions;

export default auth.reducer