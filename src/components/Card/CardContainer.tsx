import React from "react";
import * as S from "./styles";
interface CardProps {
  count: number;
  option: string;
  slide: string;
}
interface CardDataProps {
  id: number;
  count: number;
  option: string;
  slide: string;
}
interface CountupDataProps {
  prefix: string;
  suffix: string;
  start: number;
  duration: number;
}

export const CardContainer = ({ CardData,CountupData }: { CardData: CardDataProps[]; CountupData : CountupDataProps }) => {
  const Card = ({ count, option, slide }: CardProps) => {
    return (
      <>
        <S.StyledCard>
          <strong>
            <S.StyledCount
              prefix={CountupData.prefix}
              suffix={CountupData.suffix}
              start={CountupData.start}
              end={count}
              duration={CountupData.duration}
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
        {CardData.map((i: CardDataProps) =>
          Card({ count: i.count, option: i.option, slide: i.slide })
        )}
      </S.Carddiv>
    </>
  );
};
