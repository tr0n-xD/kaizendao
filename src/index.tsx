import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';

import './i18n';
import Corp from "./Corp";
import Daos from "./dao/Daos";
import DaoCreate from "./dao/DaoCreate";
import DaoHome from "./dao/DaoHome";
import IdeaPage from "./idea/IdeaPage";
import PersonPage from "./person/PersonPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/corp' element={<Corp/>}/>
        <Route path='/daos' element={<Daos/>}/>
        <Route path='/daocreate' element={<DaoCreate/>}/>
        <Route path='/daohome' element={<DaoHome/>}/>
        <Route path='/ideas' element={<IdeaPage/>}/>
        <Route path='/people' element={<PersonPage/>}/>
        <Route path='/goals' element={<PersonPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)