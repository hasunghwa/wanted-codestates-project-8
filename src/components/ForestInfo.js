import { useState } from "react";
import styled from "styled-components";

const ForestInfo = ({ setIsOpen, forestData, setforestData, idx }) => {
  const [value, setValue] = useState("");
  const [forest, setForest] = useState({
    AR: forestData.AR,
    NM: forestData.NM,
    ADRES: forestData.ADRES,
    TELNO: forestData.TELNO,
    memo: "",
  });

  const onClick = (e) => {
    if (e.target.className.includes("backGround")) {
      setIsOpen(false);
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const addForest = () => {
    if (!value) {
      alert("메모를 입력해주세요");
      return;
    }
    const localData = JSON.parse(localStorage.getItem("ForestList"));

    if (localData) {
      localStorage.setItem(
        "ForestList",
        JSON.stringify([
          ...localData,
          {
            ...forest,
            memo: value,
          },
        ])
      );
    } else {
      localStorage.setItem(
        "ForestList",
        JSON.stringify([
          {
            ...forest,
            memo: value,
          },
        ])
      );
    }
    alert("저장 되었습니다.");
    setIsOpen(false);
  };

  const deleteForest = () => {
    const localData = JSON.parse(localStorage.getItem("ForestList"));
    localData.splice(idx, 1);
    if (localData.length === 0) {
      setforestData();
      localStorage.removeItem("ForestList");
      return;
    }
    setforestData(localData);
    localStorage.setItem("ForestList", JSON.stringify(localData));
    alert("삭제 되었습니다.");
    setIsOpen(false);
  };

  const configForest = () => {
    if (!value) {
      alert("메모를 입력해주세요");
      return;
    }
    const localData = JSON.parse(localStorage.getItem("ForestList"));
    localData[idx].memo = value;
    setforestData(localData);
    localStorage.setItem("ForestList", JSON.stringify(localData));
    alert("수정 되었습니다.");
    setIsOpen(false);
  };

  return (
    <Warraper
      className="backGround"
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
    >
      <ModalDiv>
        <InfoDiv>
          <Div>
            <H2>이름</H2>
            {forestData.NM}
          </Div>
          <Div>
            <H2>주소</H2>
            {forestData.ADRES}
          </Div>
          <Div>
            <H2>연락처</H2> {forestData.TELNO}
          </Div>
          {forestData.memo ? (
            <>
              <Div>
                <H2>메모{value ? "" : " (메모를 입력해주세요)"}</H2>
                <Input
                  value={value}
                  onChange={onChange}
                  placeholder={forestData.memo}
                ></Input>
              </Div>
              <Buttons>
                <Button
                  style={{ backgroundColor: "#FC4F4F" }}
                  onClick={deleteForest}
                  isNull={true}
                  isSmall={true}
                >
                  삭제
                </Button>
                <Button
                  onClick={configForest}
                  isNull={value}
                  //disabled={value === "" ? true : false}
                  isSmall={true}
                >
                  수정
                </Button>
              </Buttons>
            </>
          ) : (
            <>
              <Div>
                <H2>메모{value ? "" : " (메모를 입력해주세요)"}</H2>
                <Input
                  value={value}
                  onChange={onChange}
                  placeholder="내용을 입력해주세요"
                ></Input>
              </Div>
              <Button
                onClick={addForest}
                isNull={value}
                // disabled={value === "" ? true : false}
                isSmall={false}
              >
                저장
              </Button>
            </>
          )}
        </InfoDiv>
      </ModalDiv>
    </Warraper>
  );
};

const Warraper = styled.div`
  z-index: 9;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const ModalDiv = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  left: 0;
  right: 17px;
  top: 100px;
  margin: 0 auto;
  width: 365px;
  height: 365px;
  text-align: left;
  border-radius: 5px;
  background-color: white;
`;

const InfoDiv = styled.div`
  display: flex;
  height: 330px;
  justify-content: space-evenly;
  flex-direction: column;
`;

const Div = styled.div`
  margin-bottom: 10px;
`;

const H2 = styled.h2`
  color: #719f94;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  width: 300px;
  height: 40px;
  padding-left: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;

  &:focus {
    outline: none;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  height: 40px;
  border: none;
  width: ${(props) => (props.isSmall ? "130px" : "")};
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) => (props.isNull ? "#00C897" : "")};
  color: ${(props) => (props.isNull ? "white" : "")};
`;

export default ForestInfo;
