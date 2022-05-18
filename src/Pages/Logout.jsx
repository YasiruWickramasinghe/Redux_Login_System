import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { logout, selectUser } from "../Services/Features/User/userSlice";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2vw;
  font-weight: bolder;
  margin: 0;
`;

const Span = styled.span`
  color: red;
`;

const Button = styled.button`
  width: 10%;
  height: 4vw;
  border: none;
  background-color: #ffd90f;
  color: grey;
  font-weight: bold;
  border-radius: 0.5vw;
  font-size: 1.2vw;
  cursor: pointer;
`;

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const hadleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div>
      <Container>
        <Title>
          Welcome <Span>{user.values.username}</Span>
        </Title>
        <Button onClick={(e) => hadleLogout(e)}>LOGOUT</Button>
      </Container>
    </div>
  );
};

export default Logout;
