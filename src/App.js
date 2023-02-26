import React from 'react';
import { Footer,Blog,possibility,Features,Header,WhatGPT3 } from './containers/indes';
import { Cta,Brand,Navbar } from './components';

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
      <possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  </div>
  );
}

export default App;
