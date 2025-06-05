import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";

const Main = styled.main`
  background-color: green;
  padding: 4rem 4.8rem 6.4rem;
`;
const AppLayout = () => {
  return (
    <div>
      <Header />

      <SideBar />

      {/* main layout */}
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default AppLayout;
