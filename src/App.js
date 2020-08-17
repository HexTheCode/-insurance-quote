import React from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Form from "./components/Form";

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  return (
    <Container>
      <Header title="Cotizador de Seguros" />
      <FormContainer>
        <Form />
      </FormContainer>
    </Container>
  );
}

export default App;
