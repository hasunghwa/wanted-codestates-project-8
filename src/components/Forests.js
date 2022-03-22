import { useState } from "react";
import styled from "styled-components";
import ForestInfo from "./ForestInfo";

const Forests = ({ forestData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [forestId, setForestId] = useState(0);
  const openModal = (idx) => {
    setIsOpen(true);
    setForestId(idx);
  };

  return (
    <Warraper>
      {isOpen ? (
        <ForestInfo
          setIsOpen={setIsOpen}
          idx={forestId}
          forestData={forestData[forestId]}
        />
      ) : null}

      {forestData.map((forest, idx) => (
        <Forest key={idx} onClick={() => openModal(idx)}>
          <p>
            {forest.fcNm}
            <br />
            {forest.fcAddr}
            <br />
            {forest.ref1}
            <br />
            {forest.memo ? forest.memo : ""}
          </p>
        </Forest>
      ))}
    </Warraper>
  );
};

const Warraper = styled.div`
  width: 80%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
`;

const Forest = styled.div`
  font-weight: 400;
  width: 70%;
  background-color: #00c897;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 8px;
  line-height: 25px;
  cursor: pointer;
`;

export default Forests;
