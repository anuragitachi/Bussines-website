import React from 'react';
import logo from './logo.svg';
import {GlobalStyle} from './globalStyles'
import {Header} from './componets/Header/Header';
import {Home} from './componets/Header/home/home';
import {Scroller} from './componets/Header/home/Scroller';
import './App.css';

function App() {
  return (
    <div className="App">
       <GlobalStyle />
       <Scroller/>
<Header/>
<Home/>
    </div>
  );
}

export default App;
