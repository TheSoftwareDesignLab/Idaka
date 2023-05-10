import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
  Router,
} from "react-router-dom";
import NavigationBar from './Navbar/NavigationBar';
import PracticesFilter from './PracticesFilter/practices_filter';
import SearchResults from './SearchResults/searchResults';
import Stages from './Stages-Tasks-Practices/stages';
import About from './About/about'
import './App.css';
import Home from "./Home/home";
import * as React from 'react';
const App = () => ( 
  <BrowserRouter>
<NavigationBar/>

    <Routes>
            <Route exact path="/"  element={<Home></Home>} />
            <Route exact path="/practices-search" element={<SearchResults></SearchResults>} />
            <Route exact path="/stages" element={<Stages></Stages>} />
            <Route exact path="/practices-filter" element={<PracticesFilter></PracticesFilter>} />
            <Route exact path="/about" element={<About></About>} />
        </Routes>
        </BrowserRouter>
);

export default App;
