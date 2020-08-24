import React from "react";
import styled from "@emotion/styled";
import { upperCase } from "../helper";

const Container = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  const { brand, year, plan } = datos;

  if (brand === "" || year === "" || plan === "") return null;

  return (
    <Container>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>Marca: {upperCase(brand)}</li>
        <li>Año del auto: {year}</li>
        <li>Plan: {upperCase(plan)}</li>
      </ul>
    </Container>
  );
};

export default Resumen;
