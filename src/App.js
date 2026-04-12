import React, { useState } from "react";
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ScrollToTop from "./components/animations/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from './components/layout/Footer'
import AOS from "aos"
import "aos/dist/aos.css"
import Contact from "./pages/Contact";
import MealsPage from "./pages/MealsPage";
import ScrollToHashElement from "./components/animations/ScrollToHashElement";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccess from "./pages/OrderSuccess";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";
import FAQ from "./components/legal/FAQ";
import TrackOrder from "./pages/TrackOrder";
import Privacy from "./components/legal/Privacy";
import Terms from "./components/legal/Terms";
import CookiesPolicy from "./components/legal/Cookies";
import Refund from "./components/legal/Refund";
import MovieDetails from "./pages/MovieDetails";

function App() {

  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration: 500,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, [])
  const location = useLocation();

  const [user, setUser] = useState(null);
  // Determine if the current route is for the admin page
  const isAdminPage = location.pathname.startsWith('/admin');
  const isUserDashboard = location.pathname.startsWith('/dashboard');
  const isTemplatePage = location.pathname.startsWith("/templates");
  const isNewUI = location.pathname.startsWith("/new");
  const isUserLogin = location.pathname.startsWith('/login');
  const isUserRegister = location.pathname.startsWith('/register');

  return (
    
<div className="min-h-screen text-white bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]">      <ScrollToTop />
      <ScrollToHashElement />
      
      {/*<MouseCursor />*/}
      <Navbar />
      {/* {!isAdminPage && !isUserDashboard && !isNewUI && !isUserLogin && !isUserRegister && (
        <Navbar />
      )} */}

      <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/meals" element={<MealsPage />} /> 
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/movie/:id" element={<MovieDetails />} />

          <Route path="*" element={<NotFound />} />

          {/* Legal routes */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/cookie-policy" element={<CookiesPolicy />} />
        </Routes>
        {/* {!isAdminPage && !isNewUI && !isUserDashboard && !isUserLogin && !isUserRegister && <Footer />} */}
            {/*<ScrollToTop />*/}
      <Footer />
    </div>
  );
}

export default App;
