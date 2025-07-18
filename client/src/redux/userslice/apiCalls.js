// import actions
import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logoutFailure,
  logoutSuccess,
  logoutStart,
} from "./userSlice";
import globalService from "@/services/globalService";
import apiClient from "@/utils/apiClient";
import { toast } from "sonner";

// login method
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await apiClient.post(`${globalService.routes.auth}/login`, user);
    dispatch(loginSuccess(res.data));
    return { payload: res.data };
  } catch (err) {
    console.log(err);
    const errorMessage = err?.response?.data?.message || "Login failed. Please try again.";
    dispatch(loginFailure(errorMessage));
    return { payload: null };
  }
};

// register method
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await apiClient.post(`${globalService.routes.auth}/register`, user);
    dispatch(registerSuccess(res.data));
    return { payload: res.data };
  } catch (err) {
    const errorMessage = err.response?.data?.message || "Registration failed. Please try again.";
    dispatch(registerFailure(errorMessage));
    return { payload: null };
  }
};

// logout method
export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    const res = await apiClient.post(`${globalService.routes.auth}/logout`,);
    dispatch(logoutSuccess());
    toast.success("Logout successfully");

    return { payload: res.data };
  } catch (err) {
    dispatch(logoutFailure(err));
    return { payload: null };

  }
};
