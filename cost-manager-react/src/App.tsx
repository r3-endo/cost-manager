import React from 'react';
import { RecoilRoot } from 'recoil';
import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
