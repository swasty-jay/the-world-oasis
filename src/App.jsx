import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 700;

  background: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 600;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />

      <StyledApp>
        <H1>the world oasis</H1>
        <Button>click me</Button>
        <Button>click out</Button>
        <Input type="number" placeholder="Enter number of guest here" />
      </StyledApp>
    </>
  );
};

export default App;
("");
