import { DateTime } from "luxon";
import React from "react";
import GrayCard from "../GrayCard";
import { Container, MesYAnioContainer, Span } from "./style";

const dias = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const HoraCard = () => {
  return (
    <GrayCard gridArea="hora">
      <Container>
        <Span className="dia" gridArea="dia">
          {dias[DateTime.now().weekday - 1]}
        </Span>
        <Span className="diaNum" gridArea="diaNum">
          {DateTime.now().day}
        </Span>
        <MesYAnioContainer gridArea="mesYAnio">
          <Span className="mes">{DateTime.now().monthLong}</Span>
          <Span className="anio">{DateTime.now().year}</Span>
        </MesYAnioContainer>
      </Container>
    </GrayCard>
  );
};

export default HoraCard;
