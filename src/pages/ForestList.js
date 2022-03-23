import { getApiData } from "../api/getApiData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Forests from "../components/Forests";
import styled from "styled-components";

const ForestList = () => {
  const [forestData, setForestData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const dataPerPage = await getApiData(page);
    if (dataPerPage) {
      setForestData((prev) => [...prev, ...dataPerPage]);
      setPage((prev) => prev + 1);
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
      <Forests forestData={forestData} />
    </Warraper>
  );
};

const Warraper = styled.div`
  display: flex;
  overflow: hidden;
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
