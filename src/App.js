import React from 'react';
import { Footer,Blog,Possibility,Features,Header,WhatGPT3 } from './containers/indes';
import { Cta,Brand,Navbar } from './components';
import './App.css'

function App() {
  return (
  <div>
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  </div>
  );
}

export default App;
