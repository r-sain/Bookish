import Slider from 'react-slick';

import './AuthorBooksCarousel.css';

const AuthorBooksCarousel = ({ books }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4,
  };
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
