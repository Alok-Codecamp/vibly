import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"



type TAuthState = {
    user:null|{
    id?: number;
    firstName: string|null;
    lastName: string|null;
    dateOfBirth: string|null;
    email: string|null;
    password: string|null;
    role: 'user'|'admin'|'guest';
    profilePic?:string;
    createdAt: Date|null;
    isActive: boolean|null;
    },
}

const initialState:TAuthState ={
    user:null,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            const {user} = action.payload
            if(user){
                state.user = user;
            }
        },
        logOut:(state)=>{
            state.user = null;
        }
        }
})

export const {setUser,logOut}= authSlice.actions;
export const SelectedUser = (state:RootState)=>state.auth.user;
export default authSlice.reducer;