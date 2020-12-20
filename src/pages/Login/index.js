import React from "react";
import { Helmet } from "react-helmet";
import { StyledLogInButton, StyledArea, StyledContent } from "./style";
import { useAuth } from "../../contexts/auth";
import Title from "../../atoms/Title";
import Input from "../../atoms/Input";

export default function Login() {
  const { signIn, loading } = useAuth();

  return (
    <>
      <Helmet title="FreeTeuxDeux - Login" />
      <StyledContent>
        <StyledArea>
          <Title text="Log in" />
          <Input type="email" labelText="email" icon="envelope" />
          <Input type="password" labelText="password" icon="key" />
          <StyledLogInButton text={loading ? "Loading..." : "LogIn"} icon="sign-in-alt" onClick={() => signIn()} />
        </StyledArea>
      </StyledContent>
    </>
  );
}
