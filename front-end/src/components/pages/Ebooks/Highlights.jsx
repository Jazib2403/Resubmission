import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icon from "@fortawesome/fontawesome-free-solid"
import Highlight from "./ui/Highlight";

const Highlights = () => {
    return (
      <section id="highlights">
        <div className="ctn">
          <div className="rw">
            <h2 className="section__title">
              Why choose <span className="blue__colour">primeEdu</span>
            </h2>
            <div className="highlight__wrapper">
              <Highlight
                icon={<FontAwesomeIcon icon="bolt" />}
                title="Easy and Quick"
                para="Get access to an entire library of books online instantly."
              />
              <Highlight
                icon={<FontAwesomeIcon icon="book-open" />}
                title="10,000+ Books"
                para="primeEdu has books in all your favourite categories."
              />
              <Highlight
                icon={<FontAwesomeIcon icon="tags" />}
                title="FREE"
                para="Get your hands on popular books for FREE. We believe education should have no cost."
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Highlights;
  