import './bookCard.css';
function BookCard({ book }) {
  return (
    <div className="book-card">
      <img
        src={book.volumeInfo.imageLinks?.thumbnail || 'placeholder-image-url'}
        alt={book.volumeInfo.title}
      />
      <h3>
        {book.volumeInfo.title.length > 40
          ? book.volumeInfo.title.substring(0, 40) + '...'
          : book.volumeInfo.title}
      </h3>
      <p>
        {(book.volumeInfo.authors?.join(', ') || 'Unknown Author').length > 40
          ? (book.volumeInfo.authors?.join(', ') || 'Unknown Author').substring(
              0,
              40
            ) + '...'
          : book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
      </p>
    </div>
  );
}

export default BookCard;
