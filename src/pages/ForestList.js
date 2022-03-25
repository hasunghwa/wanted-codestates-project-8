import { getApiData } from "../api/getApiData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Forests from "../components/Forests";
import styled from "styled-components";
import { data } from "browserslist";

const ForestList = () => {
  const [forestData, setForestData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const localData = JSON.parse(localStorage.getItem("apiData"));
    const localPage = JSON.parse(localStorage.getItem("apiPage"));
    const dataPerPage = await getApiData(localPage ? localPage : page);

    if (dataPerPage) {
      if (localData) {
        setForestData([...localData, ...dataPerPage]);
        localStorage.setItem(
          "apiData",
          JSON.stringify([...localData, ...dataPerPage])
        );
        if (dataPerPage.length === 0) return;
        localStorage.setItem("apiPage", localPage + 1);
        setPage(localPage + 1);
        return;
      }
      setForestData((prev) => [...prev, ...dataPerPage]);
      localStorage.setItem(
        "apiData",
        JSON.stringify([...forestData, ...dataPerPage])
      );
      setPage((prev) => prev + 1);
      localStorage.setItem("apiPage", page + 1);
    }
  };

  return (
    <Warraper>
      <Header>
        <Link to="/">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/back.png" />
        </Link>
      </Header>
      <H1>휴양림 목록</H1>
      {forestData.length !== 0 ? (
        <Forests
          forestData={forestData}
          setForestData={setForestData}
          loadData={loadData}
          isEmpty={false}
        />
      ) : (
        <Forests isEmpty={true} />
      )}
    </Warraper>
  );
};

const Warraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 25px;
`;

const H1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export default ForestList;
