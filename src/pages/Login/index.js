import React from "react";
import { Helmet } from "react-helmet";
import { StyledContainer, StyledContent } from "./style";
import { useAuth } from "../../contexts/auth";

export default function Login() {
  const { signIn, loading } = useAuth();

  return (
    <>
      <Helmet title="FreeTeuxDeux - Login" />
      <StyledContainer>
        <StyledContent>
          <button onClick={() => signIn()}>{loading ? "Loading..." : "LogIn"}</button>
        </StyledContent>
      </StyledContainer>
    </>
  );
}
