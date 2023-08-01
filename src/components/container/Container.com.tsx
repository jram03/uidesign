import React from "react"
import  * as S from './styles'
import { Navbar } from "../navbar/Navbar"
import { Welcome } from "../welcome/Welcome"
import { Sidebar } from "../sidebar/Sidebar"
import { Performance } from "../performance/Performance"
import { Navv } from "../Nav/Nav"

export function Container(){
    return(
    <S.SContainer>
        <Navv />
        <Welcome />
        <Performance />
    </S.SContainer>
    )



    
}