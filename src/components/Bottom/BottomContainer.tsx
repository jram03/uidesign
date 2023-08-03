import React from "react";
import { Boxx } from "./styles";
import * as S from "./styles";
import { Col } from "react-bootstrap";
interface BottomProps {
  width: string;
  url: string;
  size: string;
}
interface BottomDataProps {
  title: string;
  box: {
    title: string;
    subtitle: string;
  };
}
interface LImgContainerProps {
  id: number;
  width: string;
  url: string;
  size: string;
}
interface SImgContainerProps {
  id: number;
  width: string;
  url: string;
  size: string;
}
export const Bottom = ({
  alternate,
  LImgContainer,
  SImgContainer,
  BottomData,
}: {
  alternate: string;
  LImgContainer: LImgContainerProps[];
  SImgContainer: SImgContainerProps[];
  BottomData: BottomDataProps;
}) => {
  const box = ({ width, url, size }: BottomProps) => {
    return (
      <>
        <Boxx width={width} url={url} size={size} />
      </>
    );
  };

  return (
    <>
      <S.recentText>{BottomData.title}</S.recentText>
      <div style={{ padding: "0.5rem" }}>
        <S.Rrow>
          {LImgContainer.map((i) => (
            <S.RCol>{box({ width: i.width, url: i.url, size: i.size })}</S.RCol>
          ))}

          <S.RCol>
            <S.Frow>
              {SImgContainer.map((i) => (
                <Col className="d-flex justify-content-center align-items-center">
                  {box({ width: i.width, url: i.url, size: i.size })}
                </Col>
              ))}
            </S.Frow>
            <S.Frow>
              <Col className="mt-3">
                <S.bbox>
                  <S.h>{BottomData.box.title}</S.h>
                  <S.pp>{BottomData.box.subtitle}</S.pp>
                </S.bbox>
              </Col>
            </S.Frow>
          </S.RCol>
        </S.Rrow>
      </div>
    </>
  );
};
