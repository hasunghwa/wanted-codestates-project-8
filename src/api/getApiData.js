import axios from "axios";
import { API_URL } from "../constants";

export const getApiData = async (page) => {
  try {
    const res = await axios.get(
      `http://apis.data.go.kr/6430000/cbRecreationalForestInfoService${API_URL}&perPage=10&currentPage=${page}`
    );
    return res.data.body;
  } catch (err) {
    console.error(err);
  }
};
