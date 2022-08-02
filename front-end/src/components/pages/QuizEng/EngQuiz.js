import quizFront from './images/engquiz-img.jpg'
import './EngQuiz.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export function EngQuiz() {
  return (
    <div className="engquiz">
      <h1>Welcome to English Vowel Quiz! </h1>
      <img className="engquiz-img" src={quizFront} />
      <div className="engquiz-form">
        <Button component={Link} to="/engquiz/game"> START </Button>
      </div>
    </div>
  );
}
