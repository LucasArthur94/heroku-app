import React from "react";
import styled from "styled-components/native";
import { ProjectList } from "./src/project-list";

const StyledDarkMode = styled.SafeAreaView`
  color: white;
  background-color: black;
  height: 100%;
`;

export default function App() {
  return (
    <StyledDarkMode>
      <ProjectList />
    </StyledDarkMode>
  );
}
