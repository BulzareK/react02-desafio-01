import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "../src/components/Navbar";

import Home from "../src/views/Home";
import Contact from "./views/Contact";
import Product from "./views/Products";
import NotFound from "../src/views/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarMenu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
