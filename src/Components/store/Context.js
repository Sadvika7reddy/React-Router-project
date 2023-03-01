import { configureStore,createSlice } from "@reduxjs/toolkit";
const initialAuthState={isAuthenticated:false}


const authSlice=createSlice({
  name:'authentication',
  initialState:initialAuthState,
  reducers:{
    login(state,action){
      localStorage.setItem('token',action.payload)
      state.isAuthenticated=true
      
    },
    logout(state){
      state.isAuthenticated=false
      localStorage.removeItem('token');
    }
  }
})



const store = configureStore({
  reducer:{auth:authSlice.reducer}
});
export const AuthAction=authSlice.actions;

export default store;