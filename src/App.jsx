import React, { useState ,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Quizes from "./pages/Quizes";
import Roadmap from './pages/Roadmap';


export const App = () => {



  return (
    <>
    <Router>
      <Route path='/Home'>
      <Home/>
      </Route>
      <Route path='/Roadmap'>
      <Roadmap/>
      </Route>
      <Route path='/Quizes'>
        <Quizes/>
      </Route>
    </Router>
    </>
  )
}

export default App;
