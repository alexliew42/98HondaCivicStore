import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import "./App.css";
import Home from "./components/home";
import Cart from "./components/cart"

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/accessories" element={<h1>Accessories</h1>} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
