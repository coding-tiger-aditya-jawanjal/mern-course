import Minibar from "./components/common/Minibar";
import Navbar from "./components/common/Navbar";
import About from "./pages/common/About";
import Contact from "./pages/common/Contact";
import Home from "./pages/common/Home";
import Layout from "./pages/common/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/common/Products";
import SingleProduct from "./pages/common/SingleProduct";
import ErrorPage from "./pages/common/ErrorPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Common Routes  */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
