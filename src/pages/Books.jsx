import { useState } from 'react';
import Booklist from '../components/Booklist';
import './booksStyle.css';

function Books() {
  const [selectedOption, setSelectedOption] = useState('All');

  const handleChange = event => {
    setSelectedOption(event.target.value);
  };

  return (
    <div id="booksPage">
      <div className="books-top-bar">
        <div className="heading">Available books in our collection</div>
        <div className="filter">
          <label htmlFor="dropdown">Filter By :</label>
          <select id="dropdown" value={selectedOption} onChange={handleChange}>
            <option value="All">Show All</option>
            <option value="Author">Author</option>
            <option value="Genre">Genre</option>
          </select>
        </div>
      </div>
      <div className="books-display">
        <Booklist selectedOption={selectedOption} />
      </div>
    </div>
  );
}

export default Books;
