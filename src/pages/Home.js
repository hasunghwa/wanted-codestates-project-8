import styled from "styled-components";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Forests from "../components/Forests";

const Home = () => {
  const [localData, setLocalData] = useState();
  const [type, setType] = useState("이름");
  const [keyWord, setKeyWord] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const loadData = () => {
    const localData = JSON.parse(localStorage.getItem("ForestList"));
    if (localData) {
      setLocalData(localData);
    }
  };

  useEffect(() => {
    // "이름" => fcNm "메모" => memo
    if (keyWord) {
      let keyData = [];
      localData.map((data) => {
        if (type === "이름" && data.fcNm.includes(keyWord)) {
          keyData = [...keyData, data];
        }
        if (type === "메모" && data.memo.includes(keyWord)) {
          keyData = [...keyData, data];
        }
      });
      setIsSearch(true);
      setLocalData(keyData);
    } else {
      loadData();
    }
  }, [keyWord]);

  return (
    <Warraper>
      <Header
        isNull={localData ? true : false}
        setKeyWord={setKeyWord}
        setType={setType}
      />

      {localData ? (
        localData.length !== 0 ? (
          <>
            {isSearch ? null : (
              <MoveList>
                <Link to="/forest">
                  <img src="https://img.icons8.com/cotton/64/000000/tree.png" />
                </Link>
                {"← 휴양림 보러가기"}
              </MoveList>
            )}
            <Forests forestData={localData} setforestData={setLocalData} />
          </>
        ) : isSearch ? (
          <>
            <div>
              검색된 휴양림이 없습니다.
              <Revert
                onClick={() => {
                  loadData();
                  setIsSearch(false);
                }}
              >
                <img src="https://img.icons8.com/material-rounded/24/000000/recurring-appointment.png" />
                새로고침
              </Revert>
            </div>
          </>
        ) : null
      ) : (
        <MoveList>
          <Link to="/forest">
            <img src="https://img.icons8.com/cotton/64/000000/tree.png" />
          </Link>
          {"← 휴양림 보러가기"}
        </MoveList>
      )}
    </Warraper>
  );
};

const Warraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoveList = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Revert = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

export default Home;
