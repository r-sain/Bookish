import { useEffect, useState } from 'react';
import Banner from '../assets/banner.png';
import './homepageStyles.css';
import { fetchBooks, shuffleArray } from '../api';

function truncateString(str, maxLength) {
  if (str?.length > maxLength) {
    return str.slice(0, maxLength) + '...';
  } else {
    return str;
  }
}

function Homepage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const QUERY = 'children';
    const MAX_RESULTS = 9;

    fetchBooks(QUERY, MAX_RESULTS).then(bookData => {
      const shuffledBooks = shuffleArray(bookData);
      setBooks(shuffledBooks);
    });
  }, []);
  return (
    <div id="homepage">
      <div className="welcome-section">
        <div className="banner">
          <img src={Banner} alt="banner" />
        </div>
        <div className="headline">
          <h2>Discover endless stories at Bookish</h2>
          <h4>
            Behold the magic of words come to life! <br />
            Step into a world of imagination, knowledge, and adventure as you
            explore our carefully curated collection of books.
          </h4>
        </div>
      </div>
      <div className="featured-section">
        <div className="featured-head">
          <h2>Featured Books</h2>
          <h4>Discover our top picks – books that leave a mark</h4>
        </div>
        <div className="featured-books">
          <div className="grid">
            {books?.map(book => (
              <div key={book?.id} className="grid-item">
                <img
                  src={book?.volumeInfo.imageLinks.thumbnail}
                  alt={book?.volumeInfo.title}
                />
                <div>
                  <h2>{truncateString(book?.volumeInfo.title, 30)}</h2>
                  <p>{truncateString(book?.volumeInfo.description, 100)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
