import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';

import './i18n';
import Corp from "./Corp";
import Daos from "./Daos";
import DaoCreate from "./DaoCreate";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/corp' element={<Corp/>}/>
        <Route path='/daos' element={<Daos/>}/>
        <Route path='/daocreate' element={<DaoCreate/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)