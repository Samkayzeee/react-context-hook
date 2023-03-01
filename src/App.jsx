// import { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Sign from './pages/Sign';
import Dashboard from './pages/Dashboard';
import Lastpage from './pages/Lastpage';


function App() {

  return (
<>
  <Routes>
      <Route path='/' element={ <Home /> }></Route>
      <Route path='/sign' element={ <Sign /> }></Route>
      <Route path='/login' element={ <Login /> }></Route>
      <Route path='/dash' element={ <Dashboard /> }></Route>
      <Route path='/last' element={ <Lastpage /> }></Route>
  </Routes>
</>     
  );
}

export default App;
