import React from "react";
import { Link } from "react-router-dom";
import UndrawBooks from "./assets/Undraw_Books.svg"



const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Welcome to PrimeEdu's library of ebooks</h1>
            <h2>
              Find your dream book with <span className="blue__colour">PrimeEdu</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;