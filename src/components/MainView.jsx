import { Route, Routes } from 'react-router-dom';
import Books from '../pages/Books';
import Authors from '../pages/Authors';
import Homepage from '../pages/Homepage';
import Cart from '../pages/Cart';

function MainView() {
  return (
    <div>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default MainView;
