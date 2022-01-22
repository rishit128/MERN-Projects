import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import Navbar from './components/Nabvar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RegisterScreen from './screens/RegisterScreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Userslist from './screens/Userslist';
import Orderslist from './screens/Orderslist';
import Pizzaslist from './screens/Pizzaslist';
import Addpizza from './screens/Addpizza';
import Adminscreen from './screens/Adminscreen';
import Editpizza from './screens/Editpizza';

function App() {
  return (
  
  <Router>
     <div className="App">
       <Navbar/>
 
    <Routes>
   
    <Route path='/' element={<Homescreen />} />
    <Route path='/cart' element={<Cartscreen />} />
    <Route path='/register' element={<RegisterScreen />} />
    <Route path='/login' element={<Loginscreen />} />
    <Route path='/order' element={<Ordersscreen />} />
    <Route path='/admin' element={<Adminscreen/>} />
    <Route path='/admin/userslist' element={<Userslist/>} />
    <Route path='/admin/orderlist' element={<Orderslist/>} />
    <Route path='/admin/pizzaslist' element={<Pizzaslist/>} />
    <Route path='/admin/addpizza' element={<Addpizza/>} />
    <Route path='/admin/editpizza/:pizzaid' element={<Editpizza/>} exact/>
                
  

    </Routes>


  </div>

  </Router>
 

  
    
  );
}

export default App;
