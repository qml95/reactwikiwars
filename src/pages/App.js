import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import { StyledApp, StyledComponent } from './styleApp';

function App() {
  return (
    <StyledApp>
      <Header/>
      <StyledComponent>
       app
      </StyledComponent>
      <Footer/>
    </StyledApp>
  );
}

export default App;
