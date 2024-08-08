import axios from "axios";
import { BASE_URL } from "../const/api-url";

const request = axios.create({
  baseURL: BASE_URL,
});

export default request;