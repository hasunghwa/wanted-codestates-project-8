import axios from "axios";
const PROXY = window.location.hostname === "localhost" ? "" : "/api";

export const getApiData = async (page) => {
  try {
    const res = await axios.get(
      `${PROXY}/openapi-json/pubdata/pubMapForest.do?pageNo=${page}`
    );
    const parsedData = JSON.parse(res.data);
    return parsedData.response;
  } catch (err) {
    console.error(err);
  }
};
