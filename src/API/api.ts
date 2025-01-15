/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const URL = "https://newstorebe.onrender.com";

export const signup = async (data: any) => {
  try {
    return await axios.post(`${URL}/signup-user`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const verifyUser = async (userID: string) => {
  try {
    return await axios.get(`${URL}/verify-user/${userID}`).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const signin = async (data: any) => {
  try {
    return await axios.post(`${URL}/signin-user`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const Readone = async (userID: any) => {
  try {
    return await axios.get(`${URL}/readone/${userID}`).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const Readall = async (data: any) => {
  try {
    return await axios.get(`${URL}/readall`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const forgetPassword = async (email: any) => {
  try {
    return await axios
      .patch(`${URL}/forget-password`, { email })
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const changePassword = async (userID: string, password: string) => {
  try {
    return await axios
      .patch(`${URL}/change-password/${userID}`, { password })
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
