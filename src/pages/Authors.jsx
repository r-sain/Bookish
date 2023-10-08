import { useEffect, useState } from 'react';
import { fetchBooks } from '../api';
import './authorsStyle.css';
import { useCart } from '../CartContext';

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [clickedAuthor, setClickedAuthor] = useState(null);
  const [booksByAuthor, setBooksByAuthor] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();
  const selectedAuthor = booksByAuthor[currentIndex];
  const [cart, setCart] = useState({});

  //   const updatedCart = { ...cart };

  //   // Check if the item already exists in the cart
  //   if (updatedCart[item.id]) {
  //     // If it exists, increase the count
  //     updatedCart[item.id].count++;
  //   } else {
  //     // If it doesn't exist, add it to the cart with count 1
  //     updatedCart[item.id] = { ...item, count: 1 };
  //   }

  //   // Update the cart state
  //   setCart(updatedCart);
  // };
  const { addToCart } = useCart();

  const addBookToCart = () => {
    if (selectedAuthor) {
      const book = {
        id: selectedAuthor.id || 'defaultId',
        name: selectedAuthor.volumeInfo.title,
        price: selectedAuthor.saleInfo.listPrice?.amount || 750.55,
        image: selectedAuthor.volumeInfo?.imageLinks?.thumbnail || '',
      };
      addToCart(book);
    }
  };

  console.log(cart);
  useEffect(() => {
    const query = 'fantasy';
    const maxResults = 30;

    fetchBooks(query, maxResults)
      .then(allAuthors => {
        console.log('all', allAuthors);
        const uniqueAuthors = [...new Set(allAuthors)];
        console.log('unique', uniqueAuthors);
        setAuthors(uniqueAuthors);
      })
      .catch(error => {
        console.error('Error in component:', error);
      });
  }, []);

  const handleAuthorClick = authorName => {
    setClickedAuthor(authorName);
    const books = authors.filter(
      author => author.volumeInfo.authors[0] === authorName
    );
    setBooksByAuthor(books);
    setCurrentIndex(0);
  };

  const uniqueAuthorsArray = authors.reduce((uniqueAuthors, author) => {
    const authorName = author.volumeInfo?.authors?.[0];
    if (authorName && !uniqueAuthors.includes(authorName)) {
      uniqueAuthors.push(authorName);
    }
    return uniqueAuthors;
  }, []);

  return (
    <div id="authors-page">
      <div className="author-head">
        {' '}
        <h2>List of our Authors:</h2>
      </div>
      <div className="author-body">
        <div className="body-left">
          {' '}
          {uniqueAuthorsArray.map((authorName, index) => (
            <div
              className="author-name"
              key={index}
              onClick={() => handleAuthorClick(authorName)}
            >
              <p>{authorName}</p>
            </div>
          ))}
        </div>

        <div className="body-right">
          {' '}
          {clickedAuthor && (
            <div className="book-display">
              <h3>Books by {clickedAuthor}</h3>
              {booksByAuthor.length > 1 && (
                <div className="carousal-btns">
                  <button
                    disabled={currentIndex === 0}
                    onClick={() =>
                      setCurrentIndex(currentIndex => currentIndex - 1)
                    }
                    className={currentIndex === 0 ? 'disabled-button' : ''}
                  >
                    prev
                  </button>
                  <button
                    disabled={currentIndex === booksByAuthor.length - 1}
                    onClick={() =>
                      setCurrentIndex(currentIndex => currentIndex + 1)
                    }
                    className={
                      currentIndex === booksByAuthor.length - 1
                        ? 'disabled-button'
                        : ''
                    }
                  >
                    next
                  </button>
                </div>
              )}
              <div className="carousal-container">
                {selectedAuthor && (
                  <div className="view">
                    <img
                      src={selectedAuthor.volumeInfo?.imageLinks.thumbnail}
                      alt=""
                    />
                    <p>{selectedAuthor.volumeInfo?.title}</p>
                    <p>
                      {selectedAuthor.saleInfo.listPrice
                        ? selectedAuthor.saleInfo.listPrice.amount
                        : 750.55}{' '}
                      INR
                    </p>

                    <button onClick={() => addBookToCart()}>Add to Cart</button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Authors;
