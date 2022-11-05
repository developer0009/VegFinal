import Landing from "./components/LandingProduct";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Landing />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:name" element={<SingleProduct />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
