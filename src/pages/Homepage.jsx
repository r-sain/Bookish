import { useEffect, useState } from 'react';
import Banner from '../assets/banner.png';
import './homepageStyles.css';
import axios from 'axios';

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + '...';
  } else {
    return str;
  }
}

function Homepage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const API_KEY = 'AIzaSyDNjtBJ-rWEmuA6lsSRKvSByso0OQqsgNU';
    const QUERY = "children's storybook";
    const MAX_RESULTS = 9;
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${QUERY}&maxResults=${MAX_RESULTS}&key=${API_KEY}`;

    axios
      .get(API_URL)
      .then(response => {
        const bookData = response?.data.items;
        const shuffledBooks = shuffleArray(bookData);
        console.log(shuffledBooks);
        setBooks(shuffledBooks);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
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
