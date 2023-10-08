import './bookCard.css';
import BookLogo from '../assets/booklogo.png';
import Colorcart from '../assets/cartcolor.png';
import { useCart } from '../CartContext';
import { useState } from 'react';

function BookCard({ book }) {
  const [isHovered, setIsHovered] = useState(false);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem = {
      id: book.id,
      image: book.volumeInfo.imageLinks?.thumbnail || (
        <img src={BookLogo} alt="booklogo"></img>
      ),
      name: book.volumeInfo.title,
      price: book.saleInfo.listPrice?.amount || 750.55,
      quantity: 1,
    };

    addToCart(cartItem);
  };

  return (
    <div
      className={`book-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <span className="add-to-cart-button" onClick={handleAddToCart}>
          <img src={Colorcart} alt="" />
        </span>
      )}
      <img
        src={
          book.volumeInfo.imageLinks?.thumbnail || (
            <img src={BookLogo} alt="booklogo"></img>
          )
        }
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
