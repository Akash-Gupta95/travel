
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/react-fontawesome';
import HomePage from './component/HomePage';
import Navbar from './component/Navbar';

import { BrowserRouter,Routes,Route } from 'react-router-dom';


import TextUtile from './component/TextUtile';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar></Navbar>
    
     <Routes>
     <Route  path='/'  element={ <HomePage></HomePage>}></Route>
      <Route  path='Home'  element={ <HomePage></HomePage>}></Route>
      <Route  path='/TextUtil' element={ <TextUtile></TextUtile>}></Route>
     </Routes>



     
     
     

     
     </BrowserRouter>
    </div>
  );
}

export default App;
