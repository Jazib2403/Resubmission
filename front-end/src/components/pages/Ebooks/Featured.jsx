import React from 'react';
import Book from './ui/Book';
import { books } from '../Ebooks/Data'

const Featured = () => {
    console.log(books);
    console.log();
    return (
        <section id="features">
            <div className="ctn">
                <div className="rw">
                    <h2 className="section__title">
                        Featured <span className="blue__colour">Books</span>
                    </h2>
                    <div className="books">
                        {books
                            .filter((book) => book.rating === 5)
                            .slice(0 , 4)
                            .map(book => (
                                <Book book={book} key={book.id} />
                            ))}
                    </div>
                </div>
            </div>   
        </section>
    );
}

export default Featured;

