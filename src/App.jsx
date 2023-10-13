import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";

const App = () => {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
};

export default App;
