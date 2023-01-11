import { authSlice } from "./slice";

const { action: slice } = authSlice;

// login action 
export const loginAction = (phone) => (dispatch) => {
    dispatch(slice.setLogin(phone))
}