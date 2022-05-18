import { useState } from "react";
import FormInput from "../Components/FormInput";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  background-color: white;
  padding: 1vw 4vw;
  border-radius: 1vw;
  border: 0.5vw solid;
  border-color: #ffd90f #fce98d #ffd90f #fce98d;
`;
const Title = styled.h1`
  color: #ffd90f;
  text-align: center;
  font-size: 2vw;
  font-weight: bolder;
  margin: 0;
`;
const Button = styled.button`
  width: 100%;
  height: 4vw;
  padding: 1vw;
  border: none;
  background-color: #ffd90f;
  color: grey;
  font-weight: bold;
  border-radius: 0.5vw;
  font-size: 1.2vw;
  cursor: pointer;
  margin-top: 1vw;
  margin-bottom: 1vw;
`;
const Paragraph = styled.p`
  text-align: center;
  font-size: 1vw;
  color: grey;
  margin: 0;
`;

const Span = styled.span`
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: #ffd90f;
  }
`;

const CloseBtn = styled.span`
  cursor: pointer;
  float: right;
  font-size: 2vw;
  margin-left: 100%;
`;

const Register = (props) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "password don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const hadleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //Show Reg modal;
  if (!props.showReg) {
    return null;
  }

  return (
    <div>
      <Modal onClick={props.onClose}>
        <Form onSubmit={hadleSubmit} onClick={(e) => e.stopPropagation()}>
          <CloseBtn onClick={props.onClose} className="button">
            x
          </CloseBtn>
          <Title>REGISTER</Title>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <Button>Register</Button>
          <Paragraph>
            Already have an account?{" "}
            <Span onClick={props.onShowLogCloseReg}>Sign In</Span>
          </Paragraph>
        </Form>
      </Modal>
    </div>
  );
};

export default Register;
