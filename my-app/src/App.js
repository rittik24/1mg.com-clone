import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage'
import Footer from './Components/Footer'
import Upperfooter from './Components/Upperfooter';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Components/AllRoutes';
// import Login from './Components/Routes/Login';
// import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div className="App">

     <Navbar/>
     {/* <Login/> */}
     {/* <Homepage/> */}
     <AllRoutes/>
     <Upperfooter/>
     <Footer/>
     
     
     
    </div>
  );
}

export default App;
