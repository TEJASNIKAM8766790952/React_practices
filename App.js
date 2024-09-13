
import './App.css';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import{BrowserRouter as Router, Route, Routes}from 'react-router-dom';

function App() {

  return (
    <>
   
   <Router>
   <Navbar/>
   <Routes>
    <Route path='/Signup' element={<Signup/>}/>
   </Routes>
   </Router>
    </>
  );
}

export default App;
