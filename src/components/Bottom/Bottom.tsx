import React from "react";
import { Boxx } from "./styles";
import * as S from "./styles";
import { Col, Stack } from "react-bootstrap";
import spec from "./../../icons/glass.png";
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
interface BottomBigPicProps {
  id: number;
  width: string;
  url: string;
  size: string;
}
interface smallPicProps {
  id: number;
  width: string;
  url: string;
  size: string;
}
export const Bottom = ({
  alternate,
  BottomBigPic,
  smallPic,
  BottomData,
}: {
  alternate: string;
  BottomBigPic: BottomBigPicProps[];
  smallPic: smallPicProps[];
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
          {BottomBigPic.map((i) => (
            <S.RCol>{box({ width: i.width, url: i.url, size: i.size })}</S.RCol>
          ))}

          <S.RCol>
            <S.Frow>
              {smallPic.map((i) => (
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
