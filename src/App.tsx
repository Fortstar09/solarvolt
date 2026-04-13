import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ChatWindow from "./components/ChatWindow";
import ChatButton from "./components/ChatButton";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatButton onClick={() => setOpen(true)} />
        <ChatWindow open={open} onClose={() => setOpen(false)} />
      </div>
    </Router>
  );
}
