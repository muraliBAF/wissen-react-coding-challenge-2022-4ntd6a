
import './App.scss';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from './components/Login/Login';
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import User from './components/Users/Users';
import { useUserAccount } from './library/store/user/selector';
import React from 'react';


function App() {
  const { token } = useUserAccount();
  const navigate = useNavigate();
  
  React.useEffect(()=>{
    if(token){
      navigate('/users')
    }
    else{
      navigate('/login')
    }
  },[token])

  

  return (
    <div className="App">
        <Routes>
          <Route path="/login" element={ <Login/>}/>
          <Route path="/users" element={ <User/>}/>
        </Routes>
    </div>
  );
}

export default App;
