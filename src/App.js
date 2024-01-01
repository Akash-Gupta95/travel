
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/react-fontawesome';

import Navbar from './component/Navbar';
import HomeSecStart from './component/HomeSecStart';
import SectionBook from './component/SectionBook';
import SectionPackages from './component/SectionPackages';
import Services from './component/Services';
import Gallary from './component/Gallary';
import About from './component/About';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <HomeSecStart></HomeSecStart>
     <SectionBook></SectionBook>
     <SectionPackages></SectionPackages>
     <Services></Services>
     <Gallary></Gallary>
     <About></About>
    </div>
  );
}

export default App;
