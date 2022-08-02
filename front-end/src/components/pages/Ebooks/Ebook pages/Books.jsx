import React, { useState } from "react";
import Book from "../ui/Book";


const Books = ({ books: initialBooks }) => {
    const [books, setBooks] = useState(initialBooks);

    function filterBooks(filter) {
        console.log(filter)
        if (filter === "RATING") {
            setBooks(books.slice().sort((a, b) => b.rating - a.rating));
        }
    }
    return (
        <div id="books__body">
            <main id="books__main">
                <section>
                    <div className="books__container">
                        <div className="rw">
                            <div className="books__header">
                                <h2 className="section__title books__header--title">All Books</h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                <option value="DEFAULT" disabled>Sort</option>
                                <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className="books">
                            {
                                books.map(book => (
                                    <Book book={book} key={book.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Books;
