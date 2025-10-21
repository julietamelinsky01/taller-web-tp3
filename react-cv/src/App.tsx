import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Artworks from "./pages/Artworks";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./auth/PrivateRoute";
import "./styles.css";

export default function App(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {/* Privada */}
        <Route path="/projects" element={<PrivateRoute><Projects/></PrivateRoute>} />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
