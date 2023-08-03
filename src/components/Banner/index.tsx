import React from "react";
import * as S from "./styles";
import { Col, Row } from "react-bootstrap";
import carticon from "./../../icons/carticon.png";
interface BannerProps {
  title: string;
  subtitle: string;
  image: {
    url: string;
    height: string;
    width: string;
  };
}
export const Banner = ({
  alternate,
  BannerData,
}: {
  alternate: string;
  BannerData: BannerProps;
}) => {
  console.log("image is : ", carticon);
  return (
    <>
      <S.Container className="h2">
        <Row>
          <Col className="col-8 p-2">
            <S.h>{BannerData.title}</S.h>
            <S.pp>{BannerData.subtitle}</S.pp>
          </Col>
          <S.Ccol>
            <S.Img
              alt={alternate}
              src={BannerData.image.url}
              height={BannerData.image.height}
              width={BannerData.image.width}
            />
          </S.Ccol>
        </Row>
      </S.Container>
    </>
  );
};
