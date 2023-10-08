import { useEffect, useState } from 'react';
import './booklistStyle.css';
import { fetchBooks, shuffleArray } from '../api';
import BookCard from './BookCard';

function Booklist({ selectedOption }) {
  const [books, setBooks] = useState([]);
  const [groupedBooks, setGroupedBooks] = useState({});

  useEffect(() => {
    const QUERY = 'fantasy';
    const MAX_RESULTS = 30;

    fetchBooks(QUERY, MAX_RESULTS).then(bookData => {
      const shuffledBooks = shuffleArray(bookData);
      setBooks(shuffledBooks);
    });
  }, []);
  useEffect(() => {
    const grouped = groupBooksBy(books, selectedOption);
    setGroupedBooks(grouped);
  }, [books, selectedOption]);

  //   *************************************
  function groupBooksBy(books, selectedOption) {
    const grouped = {};

    books.forEach(book => {
      const key =
        selectedOption === 'Author'
          ? book.volumeInfo.authors?.join(', ') || 'Unknown Author'
          : book.volumeInfo.categories?.join(', ') || 'Unknown Genre';

      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(book);
    });

    return grouped;
  }

  const areGroupsSelected = selectedOption !== 'All';

  const listClassName = `booklist ${areGroupsSelected ? 'vertical-list' : ''}`;

  return (
    <div id="booklist-container">
      <div className={listClassName}>
        {selectedOption === 'All'
          ? books.map(book => <BookCard key={book.id} book={book} />)
          : Object.keys(groupedBooks).map(groupName => (
              <div key={groupName} className="groups">
                <h2>{groupName}</h2>
                <div className="horizontal">
                  {' '}
                  {groupedBooks[groupName].map(book => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Booklist;
