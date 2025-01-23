import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarScroll from './components/NavbarScroll'
import CarouselComp from './components/CarouselComp';
import Footer from './components/Footer';
import Products from './components/Products';

function App() {
  return (
    <div>
      <NavbarScroll />
      <CarouselComp />
      <Products />
      <Footer />
    </div>
  )
}

export default App