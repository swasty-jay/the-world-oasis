import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Headings";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />

      <StyledApp>
        <Heading as="h1">the world oasis</Heading>
        <Heading as="h2">check in and out</Heading>
        <Button>click me</Button>
        <Button>click out</Button>

        <Heading as="h3">for input</Heading>

        <Input type="number" placeholder="Enter number of guest here" />
        {""}
        <Input type="number" placeholder="Enter number of guest here" />
      </StyledApp>
    </>
  );
};

export default App;
("");
