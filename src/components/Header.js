import { useState } from "react";
import styled from "styled-components";

const Header = ({ setKeyWord, setType, isNull }) => {
  const [value, setValue] = useState("");
  const changeKeyword = (e) => {
    setValue(e.target.value);
  };

  return (
    <Warraper>
      <Input
        type="text"
        value={value}
        onChange={(e) => changeKeyword(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setKeyWord(value);
            setValue("");
          }
        }}
        placeholder={!isNull ? "저장된 휴양림이 없습니다." : "(으)로 검색하기"}
        disabled={!isNull}
      />
      <Select onChange={(e) => setType(e.target.value)}>
        <Option>이름</Option>
        <Option>메모</Option>
      </Select>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="#019267"
        onClick={() => {
          setKeyWord(value);
          setValue("");
        }}
      >
        <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
      </Svg>
    </Warraper>
  );
};

const Warraper = styled.div`
  margin: 15px 0px;
`;

const Select = styled.select`
  position: absolute;
  background-color: #ebeced;
  left: calc(50% - 165px);
  top: 45px;
  font-size: 1rem;
  height: 20px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const Option = styled.option``;

const Input = styled.input`
  border: 2px solid #019267;
  padding-left: 70px;
  box-sizing: border-box;
  font-size: 1rem;
  width: 350px;
  height: 40px;
  border-radius: 30px;
  background-color: #ebeced;

  &:focus {
    outline: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const Svg = styled.svg`
  position: absolute;
  left: calc(50% + 130px);
  top: 40px;
  cursor: pointer;
`;

export default Header;
