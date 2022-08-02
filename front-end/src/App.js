import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import About from './components/pages/About/About';
import Ebooks from './components/pages/Ebooks/Ebook pages/Ebooks Home';
import Printables from './components/pages/Printables/Printables';
import Form from './components/pages/Form/Form';
import SignIn from './components/pages/SignIn/SignIn';
import Footer from './components/pages/Footer/Footer';
import EduVids from './components/pages/EduVids/EduVids';
import ChatBot from './components/pages/ChatBot/ChatBot';
import Books from './components/pages/Ebooks/Ebook pages/Books';
import { books } from './components/pages/Ebooks/Data';
import EbooksHome from './components/pages/Ebooks/Ebook pages/Ebooks Home';
import Bookinfo from './components/pages/Ebooks/Ebook pages/BookInfo';
import Main from './components/pages/QuizMath/Main';
import QuizMath from './components/pages/QuizMath/Quiz';
import Last from './components/pages/QuizMath/Last';
import { EngQuiz } from './components/pages/QuizEng/EngQuiz';
import { EngQuizGame } from './components/pages/QuizEng/EngQuizGame';
import FAQ from './components/pages/FAQ (J)/FAQ';
import TnC from './components/pages/TnC/TnC';
import FormJA from './components/pages/Forms JA/FormJA';




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/main' element={<Main />} />
          <Route path='/quiz' element={<QuizMath />} />
          <Route path="/engquiz" element={<EngQuiz />} />
          <Route path="/engquiz/game" element={<EngQuizGame />} />
          <Route path='/last' element={< Last />} />
          <Route path='/ebooks' element={<Ebooks />} />
          <Route path='/eduvids' element={<EduVids />} />
          <Route path='/chatbot' element={<ChatBot />} />
          <Route path='/books' element={<Books books={books} />} />
          <Route path='books/:id' element={<Bookinfo books={books} />} />
          <Route path='/printables' element={<Printables />} />
          <Route path='/form' element={<Form />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/TnC' element={<TnC />} />
          <Route path='/FormJA' element={<FormJA />} />
        </Routes>
        <Footer />


      </div>
    </Router>

  );
}

export default App;
