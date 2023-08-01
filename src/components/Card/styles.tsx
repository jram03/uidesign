import styled from 'styled-components'
import CountUp from 'react-countup';
export const StyledCount = styled(CountUp)`
  font-family: 'Nunito', sans-serif;

  color : black;
`
export const StyledCard = styled.div`
  --bg: #f7f7f8;
  --hover-bg: #FFE5F4;
  --hover-text: #E50087;
  height : 7rem;
    width : 7rem;
    border: 1px solid lightgrey;
    border-radius : 1.5rem;
    text-align : center;
//   background: var(--bg);
  // padding: 1.5em;
  // padding-block: 1.8em;
  position: relative;
  overflow: hidden;
  transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1), transform 0.15s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // gap: 1em;
  margin-top : 1rem;

  .card__body {
    position : absolute;
    top : 60%;
    font-weight : 600;
    // color: #464853;
    // line-height: 1.5em;
    font-size: 1em;
  }


  > strong {
    position : absolute;
    font-weight : 800;
    display: block;
    font-size: 1.4rem;
    top : 40%;
    color : black;
  }

  span {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border-radius: 5px;
    font-weight: 800;
    top: 100%;
    transition: all 0.3s cubic-bezier(0.6, 0.4, 0, 1);
  }

  &:hover span {
    top: 0;
    font-weight: 700;

    // font-size: 1.2em;
    cursor : pointer;
    color : var(--hover-text);
  }

  &:hover {
    background: var(--hover-bg);
  }

  &:hover > div,
  &:hover > strong {
    opacity: 0;
  }
`;
export const H = styled.h4`
    font-weight : 800
    // font-size : large
`
export const Carddiv = styled.div`
    height : 9rem;
    @media screen and (max-width : 435px){
      // border : 1px solid black;
      height : 17rem;
    }
    @media screen and (max-width : 325px){
      // border : 1px solid black;
      height : 25rem;
    }
`