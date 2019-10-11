import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  ${"" /* width: 100%; */}
  margin: 50px auto;
  background-color: white;
  color: black;
  padding: 30px;
  text-align: center;
  a {
    font-family: "Raleway", sans-serif;
    color: black;
    padding: 10px;
    font-weight: 600;
    font-size: 16px;
  }
  p {
    max-width: 1060px;
    margin: 0 auto 20px auto;
    ${"" /* height: 180px; */}
  }
  .readmore {
    display: inline-block;
    color: white;
    padding: 10px;
    text-decoration: none;
    font-weight: 600;
    border-radius: 10px;
    margin: 10px auto;
    background-color: black;
    transition: all 0.5s;
  }
  .readmore:hover {
    transform: rotate(5deg);
    opacity: 0.6;
  }
`

const Items = styled.div`
  display: flex;

  max-width: 1060px;
  margin: 0 auto;
  justify-content: space-around;
  flex-direction: column;
  @media only screen and (min-width: 797px) {
    flex-direction: row;
  }
`

const WhiteContainer = props => (
  <StyledContainer>
    <h2>{props.heading}</h2>

    {props.description ? props.description : null}
    <Items>{props.children}</Items>
  </StyledContainer>
)

export default WhiteContainer
