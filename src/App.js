import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Gallery from './Pages/Gallery';
import AllImages from './Pages/AllImages';
import Pnf from './Pages/Pnf';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/allImages' element={<AllImages></AllImages>}></Route>
        <Route path='/*' element={<Pnf></Pnf>}></Route> 


        </Routes>
      
    </div>
  );
}

export default App;
