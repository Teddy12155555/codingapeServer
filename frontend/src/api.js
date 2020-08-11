import axios from "axios";
const URL = "http://localhost:5000";

// Define
const userRequest = axios.create({ baseURL: URL });

// Apis
export const apiUserLogin = (data) => userRequest.post("/user/login", data);
export const apiLineBotDayoff = (data) =>
  userRequest.post("/linebot/dayoff", data);
