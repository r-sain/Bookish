import { Route, Routes } from 'react-router-dom';
import Books from '../pages/Books';
import Authors from '../pages/Authors';
import Homepage from '../pages/Homepage';
import Cart from '../pages/Cart';
import { CartProvider } from '../CartContext.jsx';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
function MainView() {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/books" element={<Books />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default MainView;
