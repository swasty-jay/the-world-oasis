import styled from "styled-components";

const StyledSideBar = styled.aside`
  background-color: blue;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
`;

const SideBar = () => {
  return <StyledSideBar>SideBar</StyledSideBar>;
};

export default SideBar;
