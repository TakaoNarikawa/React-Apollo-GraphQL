import React from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import { GetEmployees } from "./types/GetEmployees";

const GET_EPLOYEES = gql`
  query GetEmployees {
    employees {
      birth_date
      emp_no
      first_name
      hire_date
      last_name
    }
  }
`;

function App() {
  const { data } = useQuery<GetEmployees>(GET_EPLOYEES);
  return (
    <Container>
      <Pre>{JSON.stringify(data, null, 2)}</Pre>
    </Container>
  );
}

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const Pre = styled.pre`
  background-color: #202329;
  padding: 10px;
  font-size: 18px;
`;

export default App;
