import { authSlice } from "./slice";

const { actions: slice } = authSlice;

// login action 
export const loginAction = (phone) => (dispatch) => {
    dispatch(slice.setLogin(phone))
}