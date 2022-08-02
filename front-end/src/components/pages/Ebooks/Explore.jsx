import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    return (
        <section>
            <div className="ctn">
                <div className="rw row__column">
                    <h2>
                        Explore more <span className='blue__colour'>Books</span>
                    </h2>
                    <Link to="/books">
                    <button className="btn">Explore books</button>
                    </Link>
                    <h5>
                        All books courtesy of :&nbsp;
                        <a>
                            https://monkeypen.com/
                        </a>
                    </h5>
                </div>
            </div>
        </section>
    );
}

export default Explore;
