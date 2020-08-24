import React, { useState, Fragment } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Form from "./components/Form";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 2rem;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, saveResumen] = useState({
    finalPrice: 0,
    datos: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const [cargando, saveCargando] = useState(false);

  const { finalPrice, datos } = resumen;

  return (
    <Container>
      <Header title="Cotizador de Seguros" />
      <FormContainer>
        <Form saveResumen={saveResumen} saveCargando={saveCargando} />

        {cargando ? <Spinner /> : null}

        {!cargando ? (
          <Fragment>
            <Resumen datos={datos} />
            <Resultado finalPrice={finalPrice} />
          </Fragment>
        ) : null}
      </FormContainer>
    </Container>
  );
}

export default App;
