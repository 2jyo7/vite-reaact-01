import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
    return (
        <div>
          <MainHeader>
           <NavLink to={"/"}>
            <img 
            className="logo"
            src="https://cdn.pixabay.com/photo/2016/12/28/08/15/hummingbird-1935665_1280.png"
            alt="header-logo" />
              </NavLink>
          <Navbar />
          
          </MainHeader>
        </div>
    )
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 10rem;
    max-width: 100%;
  }
`;
export default Header;