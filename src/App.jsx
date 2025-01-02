import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import './index.css'
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Forgetpwd from './components/auth/ForgetPwd'
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home'
import AdminDashboard from './components/dashboard/AdminDashboard';



function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forget-password" element={<Forgetpwd />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>
        

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
