import axios from "axios";
import { API_URL } from "../constants";

export const getApiData = async (page) => {
  try {
    const res = await axios.get(
      `/api${API_URL}&perPage=10&currentPage=${page}`
    );
    return res.data.body;
  } catch (err) {
    console.error(err);
  }
};
