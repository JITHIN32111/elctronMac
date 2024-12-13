import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route ,useNavigate} from 'react-router-dom';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Header from './components/Header';
import Signup from './pages/authPages/SIgnup';
import Login from './pages/authPages/Login';
import ForgotPass from './pages/authPages/ForgotPassword'
import CreatePassword from './pages/authPages/CreatePassword';
import PassChangeSuccess from './pages/authPages/PassChangeSuccess';
import  './App.css'
// Define your Home component
const Home = () => {
  const navigate = useNavigate(); // Call the hook at the top of the function

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <p onClick={() => navigate('/one')} style={{ cursor: 'pointer' }}>Go to One</p>
      <p onClick={() => navigate('/two')} style={{ cursor: 'pointer' }}>Go to Two</p>
      <p onClick={() => navigate('/three')} style={{ cursor: 'pointer' }}>Go to Three</p>
      <p onClick={() => navigate('/four')} style={{ cursor: 'pointer' }}>Go to Four</p>
      <p onClick={() => navigate('/five')} style={{ cursor: 'pointer' }}>Go to Five</p>
    </div>
  );
};

// Main App component
const App = () => {
 

  return (
    <>  
      {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPass />} />
      <Route path="/new-password" element={<CreatePassword />} />
      <Route path="/password-success" element={<PassChangeSuccess />} />
    </Routes>
    </>
  
  );
};

export default App;
