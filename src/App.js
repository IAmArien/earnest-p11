import Header from './header/header';
import Carousel from './sections/carousel/carousel';
import Tools from './sections/tools/tools';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Carousel />
      <Tools />
    </React.Fragment>
  );
}
