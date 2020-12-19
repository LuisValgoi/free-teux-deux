import React from "react";

import Header from "../../molecules/Header";
import Content from "../../atoms/Content";

export default function AppTemplate({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
