import logo from './logo.svg';
import './App.css';
import Profile from './Comp/Profile';
import Home from './Comp/Home';
import Footer from './Comp/Footer';
import Nav from './Comp/Nav';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
   

    <Router>
      <Routes>
    
        <Route path="/" element={ <Home /> }></Route>
        <Route path='/profile/:id' element={ <Profile/> }></Route>
       
        
      </Routes>
    </Router>


  

    </div>
  );
}

export default App;
