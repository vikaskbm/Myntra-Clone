import React, { Component } from 'react'
import data from "../../data";
import "./Deals.css";
import styled from 'styled-components'

const DealCard = (props) => {
  return (
    <div className={props.className}>
    <img width="100%" src={props.image} alt="dealCard"/>    
  </div>
  )
}

const DealCardStyled = styled(DealCard)`
  max-width:290px;
  min-width:290px;
  position:relative;
  max-height:320px;



  ::before{
      width: 100%;
      height: 100%;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.2);
  }
`
const H6 = styled.h2`

  text-align: center;
`
const DealView = (props) => {
  console.log(props.data.data)

  if(props.data.data) {
    return (
      <>
        <H6>HOT DEALS</H6>
        <div className="cardclass">
          {
            props.data.data.map((element,id)=>{
            return <DealCardStyled key={id} image={element}/>
            })
          }
        </div>
      </>
    )
  } else {
    return <> </>
  }
  
}

export default DealView;
