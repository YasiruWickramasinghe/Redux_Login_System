import React from "react";

import styled from "styled-components";

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
  return (
    <div>
      <Container>
        <Title>
          Welcome <Span>Yasiru Wickramasinghe</Span>
        </Title>
        <Button>LOGOUT</Button>
      </Container>
    </div>
  );
};

export default Logout;
