import React from 'react';

import Header from './header/header';
import Carousel from './sections/carousel/carousel';
import Tools from './sections/tools/tools';
import Basics from './sections/basics/basics';
import Life from './sections/life/life';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Carousel />
      <Tools />
      <Basics />
      <Life />
    </React.Fragment>
  );
}
