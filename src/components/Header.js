import { useState } from "react";
import styled from "styled-components";

const Header = ({ setKeyWord, setType }) => {
  const [value, setValue] = useState("");
  const changeKeyword = (e) => {
    setValue(e.target.value);
  };

  return (
    <Warraper>
      <Select onChange={(e) => setType(e.target.value)}>
        <Option>이름</Option>
        <Option>메모</Option>
      </Select>
      <Input
        type="text"
        value={value}
        onChange={(e) => changeKeyword(e)}
        placeholder="검색어를 입력해주세요"
      />

      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="#019267"
        onClick={() => setKeyWord(value)}
      >
        <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
      </Svg>
    </Warraper>
  );
};

export default Header;

const Warraper = styled.div`
  display: flex;
  justify-content: center;
  height: 59px;
  width: 100%;
  margin: 15px 0px;
`;

const Select = styled.select`
  font-size: 1rem;
  border-left: 2px solid #019267;
  border-top: 2px solid #019267;
  border-bottom: 2px solid #019267;
  border-right: none;

  &:focus {
    outline: none;
  }
`;

const Option = styled.option``;

const Input = styled.input`
  border: 2px solid #019267;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 1rem;
  width: 350px;

  &:focus {
    outline: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const Svg = styled.svg`
  position: relative;
  margin-left: -45px;
  margin-top: 12px;
  cursor: pointer;
`;
