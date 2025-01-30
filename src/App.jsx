import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenProducts from "./pages/men/MenProducts";
import MTShirts from "./pages/men/MTshirts";
import MShoes from "./pages/men/MShoes";
import MJeansTrousers from "./pages/men/MJeansTrousers";
import MCoats from "./pages/men/MCoats";
import MAccessories from "./pages/men/MAccessories";

import WomenProducts from "./pages/women/WomenProducts";
import WAccessories from "./pages/women/WAccessories";
import WDresses from "./pages/women/WDresses";
import WShoes from "./pages/women/WShoes";
import WSkirtsPants from "./pages/women/WSkirtsPants";
import WTops from "./pages/women/WTops";

import KidsProducts from "./pages/kids/KidsProducts";
import KTshirts from "./pages/kids/KTshirts";
import KOuterwear from "./pages/kids/KOuterwear";
import KAccessories from "./pages/kids/KAccessories";
import KJeansBottoms from "./pages/kids/KJeansBottoms";
import KShoes from "./pages/kids/KShoes";
import KToys from "./pages/kids/KToys";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Men Routes */}
        <Route path="/men-products" element={<MenProducts />} />
        <Route path="/men-products/tshirts" element={<MTShirts />} />
        <Route path="/men-products/jeans" element={<MJeansTrousers />} />
        <Route path="/men-products/shoes" element={<MShoes />} />
        <Route path="/men-products/coats" element={<MCoats />} />
        <Route path="/men-products/accessories" element={<MAccessories />} />

        {/* Women Routes */}
        <Route path="/women-products" element={<WomenProducts/>} />
        <Route path="/women-products/dresses" element={<WDresses />} />
        <Route path="/women-products/tops" element={<WTops />} />
        <Route path="/women-products/skirts-and-pants" element={<WSkirtsPants />} />
        <Route path="/women-products/shoes" element={<WShoes />} />
        <Route path="/women-products/accessories" element={<WAccessories />} />

        {/* Kids Routes */}
        <Route path="/kids-products" element={<KidsProducts/>} />
        <Route path="/kids-products/tshirts" element={<KTshirts />} />
        <Route path="/kids-products/jeans-and-bottoms" element={<KJeansBottoms />} />
        <Route path="/kids-products/shoes" element={<KShoes />} />
        <Route path="/kids-products/outerwear" element={<KOuterwear />} />
        <Route path="/kids-products/accessories" element={<KAccessories />} />
        <Route path="/kids-products/toys" element={<KToys />} /> 

        {/* Wishlist, Cart, and Profile */}
        {/* <Route path="/wishlist" element={<div>Wishlist Page</div>} />
        <Route path="/cart" element={<div>Cart Page</div>} />
        <Route path="/profile" element={<div>Profile Page</div>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
