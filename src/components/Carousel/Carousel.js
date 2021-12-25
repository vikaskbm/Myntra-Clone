import "./Carousel.css";

import { Carousel } from "react-bootstrap";
import data from '../../data';
import React from "react";

const CarouselView = (props) => {
  console.log(props.data.data)

  if(props.data.data) {
    return (
      <>
        <div className="container-fluid crousel-wrapper">
        <Carousel>
          {
            props.data.data.map((item, id)=>{
              return(<Carousel.Item key={id}>
              <img
                className="d-block w-100"
                src={item}
                alt="First slide"
                width="100%"
              />
            
                </Carousel.Item>
              )
            })
          }
    
      </Carousel>
        </div>
      </>
    );
  } else {
    return <> </>
  }
}

export default CarouselView;
