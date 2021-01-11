import React from 'react';
import './App.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="dna.png" width="250" onDragStart={handleDragStart} className="center-carousel" />,
  <img src="stock2.png" onDragStart={handleDragStart} className="center-carousel" />,
  <img src="stock3.png" onDragStart={handleDragStart} className="center-carousel" />,
];


class App extends React.Component {
  render() {
      return (
        <AliceCarousel 
        disableDotsControls="true"
        disableButtonsControls="true"
        className="center-carousel" 
        autoPlay="true" 
        infinite="true" 
        autoPlayInterval="4000" 
        items={items} 
        />
      )
  }
}
export default App;