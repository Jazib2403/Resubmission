import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Form from './components/pages/Form/Form';
import FAQ from './components/pages/FAQJ/FAQ';
import TnC from './components/pages/TnC/TnC';
import FormJA from './components/pages/Forms JA/FormJA';




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/TnC' element={<TnC />} />
          <Route path='/FormJA' element={<FormJA />} />
        </Routes>


      </div>
    </Router>

  );
}

export default App;
