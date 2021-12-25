import React from 'react'
import data from "../../data";
import "./Brands.css";
import styled from 'styled-components'

function BrandCard(props) {
  return (
      <div className={props.className}>
        <img width="100%" src={props.image} alt="brandFocuscard"/>
        <div className="desc">
            <h5>{props.brandName}</h5>
            <p>{props.message}</p>
            <p className="light-text">+ EXPLORE</p>
        </div>
      
    </div>
  )
}

const BrandCardStyled = styled(BrandCard)`
  max-width:290px;
  min-width:290px;
  position:relative;
  max-height:320px;


  .desc{
      position:relative;
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
      padding:15px 15px 3px 15px;
      max-width:87%;
      top:-70px;
      background-color:#fff;
      margin: 0 auto;
      text-align:center;
      line-height:1.2;
    

  }
  .desc h5{
      font-weight:700;
      line-height:1;
      
  }
  .desc p{
      font-weight:700;
      line-height:1;
  }

  .desc .light-text{
      color:#d9d7dd;
      font-size:0.7rem;
      margin-top:10px;
      line-height:1;
  }
`
const H6 = styled.h2`
  margin-top: 5em;
  text-align: center;
`

const BrandView = (props) => {
  console.log(props.data.data)
  if(props.data.data) {
    return (
      <>
        <H6>BRANDS IN FOCUS</H6>
        <div className="cardclass">
          {
            props.data.data.map((element, id)=>{
            return <BrandCardStyled image={element} key={id}/>
            })
          }
        </div>
      </>
    )
  } else {
    return <> </>
  }
}

export default BrandView;