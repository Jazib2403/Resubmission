import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Book from '../ui/Book';
import Ratings from '../ui/Rating';

const Bookinfo = ({ books }) => {
    const { id } = useParams();
    const book = books.find((book) => +book.id === +id);

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="rw">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                {book.title}
                                </h2>
                                <Ratings rating={book.rating} />
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        {book.description}
                                    </p>
                                    <p className="book__summary--para">
                                        {book.para}
                                    </p>
                                </div>
                                <button className="btn">
                                    <a className="download__button" href={book.download} target="blank">
                                        Download PDF
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="books__container">
                    <div className="rw">
                        <div className="book__selected--top">
                            <h2 className="book_-selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                        <div className="books">
                        {books
                            .filter((book) => book.rating === 5 && +book.id !== +id)
                            .slice(0, 4)
                            .map(book => <Book book={book} key={book.id} />)
                        } 
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Bookinfo;
