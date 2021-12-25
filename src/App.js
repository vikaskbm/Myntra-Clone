import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Navbar/Navbar'
import CarouselView from './components/Carousel/Carousel';
import DealView from './components/Deals/Deals';
import BrandView from './components/Brands/Brands'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
  const [CarouselData, setCarouselData] = useState({})
  const [DealData, setDealData] = useState([])
  const [BrandData, setBrandData] = useState([])
  // const [ShoeData, setShoeData] = useState([])
  // const [KidsData, setKidsData] = useState([])
  
  async function fetchData(route, Func) {
    await axios.get('http://localhost:3011/' + route)
    .then(response => {
      Func(response.data)
    })
    .catch(err => {
      console.log(err)
    });
  }

  useEffect(() => {
    fetchData('carousel', setCarouselData);
    fetchData('deals', setDealData);
    fetchData('brands', setBrandData);
  }, [])

  return ( 
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Header/> 
          <CarouselView data={CarouselData}/>
          <DealView data={DealData}/>
          <BrandView data={BrandData}/>
          </>
        } />
      </Routes>
    </Router>
  );
}
