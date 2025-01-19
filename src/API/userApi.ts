/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
// import { data } from "react-router-dom";

// const URL: string = "https://testbe-nv4b.onrender.com";
// const URL: string = "http://localhost:7000";
const URL: string = "https://test-backend-9de4.onrender.com";

export const createAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/api/create-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
export const logInUser = async (data: any) => {
  try {
    return await axios.post(`${URL}/api/login`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
export const verifyUser = async (userID: any, otp: string) => {
  try {
    return await axios
      .post(`${URL}/api/verifyUser/${userID}`, { otp })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
export const readOneUser = async (data: any) => {
  try {
    return await axios.post(`${URL}/read-one`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
