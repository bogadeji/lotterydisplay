// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Authorization from './Pages/Authorization/Authorization'
import NotFound from './Pages/404';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<Authorization />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
