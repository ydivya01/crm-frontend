
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';


import Signup from './Pages/Signup';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import ForgotPassword from './Pages/ForgotPassword';

import  Navbar  from './Pages/Navbar';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Createticket from './Pages/Createticket';
import SingleTicket from './Pages/SingleTicket';
import EditTicket from './Pages/EditTicket';
import Support from './Pages/Support';
import Employee from './Pages/Employee';
import InnerHome from './Pages/InnerHome';
import AddUSer from './Pages/AddUSer';
import Features from './Components/Features';
import Singleuser from './Pages/Singleuser';
// import Login from './Pages/Login';

export const userContext = createContext()

const App=()=> {

const[user, setUser] = useState({})

axios.defaults.withCredentials = true;

useEffect(()=>{
axios.get('http://localhost:3001')
.then(user=> {
  setUser(user.data)
})
.catch(err => console.log(err))
  },[])

  return (
    // <div className="app">
// {/* <BrowserRouter> */}
// {/* <NavBar/> */}
// {/* <Routes>

 <>
 <userContext.Provider value={user}>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/register' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/forgotpassword' element={<ForgotPassword/>}/>
 
  <Route path='/createticket' element={<Createticket/>}/>
  <Route path='/ticket/:id' element={<SingleTicket/>}/>
  <Route path='/user/:id' element={<Singleuser/>}/>
  <Route path='/editticket/:id' element={<EditTicket/>}/>
  <Route path='/support' element={<Support/>}/>
  <Route path='/employee' element={<Employee/>}/>
  <Route path='/innerhome' element={<InnerHome/>}/>
  <Route path='/adduser' element={<AddUSer/>}/>
  <Route path='/features' element={<Features/>}/>
 
  <Route path='/' element={<Home/>}/>
  
</Routes>
</BrowserRouter>
</userContext.Provider>

</> 


    
  );
}

export default App;
