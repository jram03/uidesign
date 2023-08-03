import React from "react";
import * as S from "./styles";
import { Col, Image, Row, Stack } from "react-bootstrap";
import { PerData } from "./../../pages/Config";

interface ProgressProps {
  title: string;
  revenue: string;
  orders: string;
  growth: boolean;
  gvalue: string;
}
interface FaceColprops {
  image: string;
  name: string;
}

interface PerdataProps {
  title: string;
  revenue: string;
  orders: string;
  growth: boolean;
  gvalue: string;
}
interface PerformanceDataProps {
  title: string;
  clientsection: {
    title: string;
    right: string;
    size: string;
  };
  progressection: {
    title: string;
    icon: {
      src: string;
      height: number;
      width: number;
    };
    bagicon: {
      src: string;
      height: number;
      width: number;
    };
  };
}
export function Performance({
  alternate,
  FacesData,
  Perdata,
  PerformanceData,
}: {
  alternate: string;
  FacesData: FaceColprops[];
  Perdata: PerdataProps[];
  PerformanceData: PerformanceDataProps;
}) {
  const faceCol = ({ image, name }: FaceColprops) => {
    return (
      <>
        <Col>
          <Stack direction="vertical">
            <div className="d-flex justify-content-center">
              <Image
                alt={alternate}
                height={PerformanceData.clientsection.size}
                width={PerformanceData.clientsection.size}
                src={image}
                roundedCircle
              />
            </div>
            <S.Textxsm style={{ textAlign: "center" }}>{name}</S.Textxsm>
          </Stack>
        </Col>
      </>
    );
  };

  const faces = () => {
    return <>{FacesData.map((i) => faceCol(i))}</>;
  };
  const NewClients = () => {
    return (
      <>
        <S.SpaceRow>
          <Col>
            <S.Textsm>{PerformanceData.clientsection.title}</S.Textsm>
          </Col>
          <Col className="col-auto">
            <S.Textxsm>{PerformanceData.clientsection.right}</S.Textxsm>
          </Col>
        </S.SpaceRow>
        <S.SpaceRow>{faces()}</S.SpaceRow>
      </>
    );
  };

  const below = (props: ProgressProps) => {
    console.log(props.growth);
    let c = props.growth ? "#198754" : "#DC3545";
    let bg = props.growth ? "#19875450" : "#DC354550";

    return (
      <>
        <Row>
          <Col className="p-2">
            <S.Textsm>
              <img
                alt={alternate}
                src={PerformanceData.progressection.bagicon.src}
                height={PerformanceData.progressection.bagicon.height}
                width={PerformanceData.progressection.bagicon.width}
              />
              &nbsp;{props.orders}
            </S.Textsm>
          </Col>
          <Col className="col-4">
            <S.Box c={c} bg={bg}>
              <S.Textxsm>
                <img
                  alt={alternate}
                  src={PerformanceData.progressection.icon.src}
                  height={PerformanceData.progressection.icon.height}
                  width={PerformanceData.progressection.icon.width}
                />
                &nbsp;&nbsp;{props.gvalue}
              </S.Textxsm>
            </S.Box>
          </Col>
        </Row>
      </>
    );
  };

  const Progress = (props: ProgressProps) => {
    return (
      <>
        <S.ProgressBox>
          <Row>
            <Col>
              <S.Textsm>{props.title}</S.Textsm>
            </Col>
            <Col className="col-auto">
              <S.Textxsmbold>{props.revenue}</S.Textxsmbold>
            </Col>
          </Row>
          <Row>
            <Col>
              <S.ProgressLoader>
                <S.Progress></S.Progress>
              </S.ProgressLoader>
            </Col>
          </Row>
          <Row>{below(props)}</Row>
        </S.ProgressBox>
      </>
    );
  };

  return (
    <>
      <S.Container lg={3} md={4} sm={11}>
        <S.Text>{PerformanceData.title}</S.Text>
        {NewClients()}
        <S.Textsm>{PerformanceData.progressection.title}</S.Textsm>
        <S.ProgressContainer>
          {PerData.map((i) => Progress(i))}
        </S.ProgressContainer>
      </S.Container>
    </>
  );
}
