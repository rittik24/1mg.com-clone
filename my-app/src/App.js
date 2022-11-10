import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage'
import Footer from './Components/Footer'
import Upperfooter from './Components/Upperfooter';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Homepage/>
     <Upperfooter/>
     <Footer/>
    </div>
  );
}

export default App;
