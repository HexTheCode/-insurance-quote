import React, { useState } from "react";
import styled from "@emotion/styled";
import { countYears, brandPrice, planPrice } from "../helper";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  padding: 1rem;
`;

const Form = ({ saveResumen, saveCargando }) => {
  const [datos, saveDatos] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, handleError] = useState(false);

  const { brand, year, plan } = datos;

  const getInfo = (e) => {
    saveDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      handleError(true);
      return;
    }
    handleError(false);

    let basePrice = 2000;

    const differenceYear = countYears(year);

    basePrice -= (differenceYear * 3 * basePrice) / 100;

    basePrice *= brandPrice(brand);

    basePrice = parseFloat(basePrice * planPrice(plan)).toFixed(2);

    saveCargando(true);

    setTimeout(() => {
      saveCargando(false);

      saveResumen({
        finalPrice: basePrice,
        datos,
      });
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Field>
        <Label htmlFor="brands">Marca</Label>
        <Select id="brands" name="brand" value={brand} onChange={getInfo}>
          <option value="">-- Seleccionar --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiático</option>
        </Select>
      </Field>
      <Field>
        <Label htmlFor="year">Año</Label>
        <Select id="year" name="year" value={year} onChange={getInfo}>
          <option value="">-- Seleccionar --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label htmlFor="basico">Plan</Label>
        <InputRadio
          id="basico"
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={getInfo}
        />
        Básico
        <InputRadio
          id="basico"
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={getInfo}
        />
        Completo
      </Field>
      <Button type="submit">Cotizar</Button>
    </form>
  );
};

export default Form;
