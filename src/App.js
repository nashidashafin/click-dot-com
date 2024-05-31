import { Navbar } from 'react-bootstrap';
import './App.css';
import Banner from './Components/Banner';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Gallery from './Pages/Gallery';
import AllImages from './Pages/AllImages';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/allImages' element={<AllImages></AllImages>}></Route>

        </Routes>
      
    </div>
  );
}

export default App;
