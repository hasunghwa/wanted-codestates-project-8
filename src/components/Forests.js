import { useState, useRef } from "react";
import styled from "styled-components";
import ForestInfo from "./ForestInfo";

const Forests = ({ forestData, setforestData, loadData, isEmpty }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [forestId, setForestId] = useState(0);
  const [prevScroll, setprevScroll] = useState(0);
  const fullContent = useRef();

  const openModal = (idx) => {
    setIsOpen(true);
    setForestId(idx);
  };

  const onScroll = (e) => {
    const scrollAreaHeight = fullContent.current.clientHeight; // 한 눈에 보이는 스크롤 영역
    const myScroll = e.target.scrollTop + scrollAreaHeight; // 사용자의 스크롤 위치

    if (myScroll > e.nativeEvent.target.scrollHeight - 100) {
      if (e.nativeEvent.target.scrollHeight === prevScroll) return;
      setprevScroll(e.nativeEvent.target.scrollHeight);
      loadData();
    }
  };

  return (
    <Warraper ref={fullContent} onScroll={(e) => onScroll(e)}>
      {isOpen ? (
        <ForestInfo
          setIsOpen={setIsOpen}
          idx={forestId}
          forestData={forestData[forestId]}
          setforestData={setforestData}
        />
      ) : null}
      {!isEmpty
        ? forestData.map((forest, idx) => (
            <Forest key={idx} isEmpty={false} onClick={() => openModal(idx)}>
              <p>
                이름: {forest.fcNm}
                <br />
                주소: {forest.fcAddr}
                <br />
                연락처: {forest.ref1}
                <br />
                {forest.memo ? "메모: " + forest.memo : ""}
              </p>
            </Forest>
          ))
        : [0, 1, 2, 3, 4].map((data, idx) => (
            <Forest key={idx} isEmpty={true} />
          ))}
    </Warraper>
  );
};

const Warraper = styled.div`
  width: 83%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  overflow-y: auto;
`;

const Forest = styled.div`
  font-weight: 400;
  width: 75%;
  background-color: ${(props) => (props.isEmpty ? "#dddddd" : "#00c897")};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 8px;
  line-height: 25px;
  height: ${(props) => (props.isEmpty ? "115px" : "")};
  cursor: pointer;
`;

export default Forests;
