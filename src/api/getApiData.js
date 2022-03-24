import axios from "axios";

export const getApiData = async (page) => {
  try {
    const res = await axios.get(
      `/openapi-json/pubdata/pubMapForest.do?pageNo=${page}`
    );
    const parsedData = JSON.parse(res.data);
    return parsedData.response;
  } catch (err) {
    console.error(err);
  }
};
