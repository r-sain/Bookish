import React from 'react';
import Slider from 'react-slick';

import './AuthorBooksCarousel.css'; // Create a CSS file for styling

const AuthorBooksCarousel = ({ books }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // You can adjust the number of slides to show
    slidesToScroll: 4,
  };
  console.log('books', books);
  return (
    <div>
      <Slider {...settings}>
        {['as', 'rer'].map((ele, index) => (
          <div key={index}>{ele}</div>
        ))}
      </Slider>
    </div>
  );
};

export default AuthorBooksCarousel;

// books.length > 1 &&
//     books.map((book, index) => (
//       <div key={index} className="book-card">
//         <h3>{book.volumeInfo.title}</h3>
//         <p>
//           Author:{' '}
//           {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
//         </p>
//         {/* Add more book details */}
//       </div>
//     ))
