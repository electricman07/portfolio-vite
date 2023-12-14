import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import FAQs from "./pages/FAQs/FAQs";
import Resources from "./pages/resources/Resources";
import NotFound from "./pages/notFound/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="FAQs" element={<FAQs />} />
        <Route path="resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
