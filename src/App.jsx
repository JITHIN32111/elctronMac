import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route ,useNavigate} from 'react-router-dom';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Header from './components/Header';

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
    <>    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/one" element={<One />} />
      <Route path="/two" element={<Two />} />
      <Route path="/three" element={<Three />} />
      <Route path="/four" element={<Four />} />
      <Route path="/five" element={<Five />} />
    </Routes></>
  
  );
};

export default App;
