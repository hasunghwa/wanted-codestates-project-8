import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ForestList from "./pages/ForestList";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Warraper>
          <Routes>
            <Route exact path="/forest" element={<ForestList />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Warraper>
      </Container>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #dddddd;
  display: flex;
  justify-content: center;
`;

const Warraper = styled.div`
  width: 672px;
  background-color: white;
  overflow: hidden;
  padding-top: 20px;
`;
