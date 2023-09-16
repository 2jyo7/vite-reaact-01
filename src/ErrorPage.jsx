import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";


const ErrorPage = () => {
  return (
    <Wrapper>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7sM24IPTPzO3zUXB20md_xXGvvTPb2s-8w&usqp=CAU" alt="error" />
      <NavLink to={"/"}>
        <Button className="btn"> Go Back</Button>
        </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

export default ErrorPage;