import React from "react";
import * as S from "./styles";
import { Col, Row, Stack } from "react-bootstrap";
import styled from "styled-components";
import CountUp from "react-countup";
interface CardProps {
  count: number;
  option: string;
  slide: string;
}
interface CarddataProps {
  id: number;
  count: number;
  option: string;
  slide: string;
}

export const Cardd = ({ Carddata }: { Carddata: CarddataProps[] }) => {
  const Card = ({ count, option, slide }: CardProps) => {
    return (
      <>
        <S.StyledCard>
          <strong>
            <S.StyledCount
              prefix="+"
              suffix="K"
              start={0}
              end={count}
              duration={5}
            />
          </strong>
          <div className="card__body">{option}</div>
          <span>
            {slide} {option}
          </span>
        </S.StyledCard>
      </>
    );
  };
  return (
    <>
      <S.Carddiv className="d-flex flex-wrap justify-content-evenly">
        {Carddata.map((i: CarddataProps) =>
          Card({ count: i.count, option: i.option, slide: i.slide })
        )}
      </S.Carddiv>
    </>
  );
};
