import React from 'react';

import Header from './header/header';
import Carousel from './sections/carousel/carousel';
import Tools from './sections/tools/tools';
import Basics from './sections/basics/basics';
import Life from './sections/life/life';
import Footer from './sections/footer/footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <React.Fragment>
      <div className='div-content-wrapper'>
        <Header />
        <Carousel />
        <Tools />
        <Basics />
        <Life />
      </div>
      <Footer />
    </React.Fragment>
  );
}
