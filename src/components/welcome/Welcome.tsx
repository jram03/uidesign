import React from "react";
import * as S from './styles'
import { Header } from "../Header/Header";
import { Banner } from "../Banner";
import { Cardd } from "../Card/Cardd";
import { Bottom } from "../Bottom/Bottom";
export function Welcome(){
    return(
        <>
        <S.Container lg={6} md={7} sm={11}>
            <Header />
            <Banner />
            <Cardd />
            <Bottom />
        </S.Container>

        </>
    )
}