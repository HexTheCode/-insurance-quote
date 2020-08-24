import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultadoPrice = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const TextFinalPrice = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Resultado = ({ finalPrice }) => {
  return finalPrice === 0 ? (
    <Message>Elige marca, año y tipo de seguro</Message>
  ) : (
    <ResultadoPrice>
      <TransitionGroup component="p" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={finalPrice}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextFinalPrice>El total es: {finalPrice} €</TextFinalPrice>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoPrice>
  );
};

export default Resultado;
