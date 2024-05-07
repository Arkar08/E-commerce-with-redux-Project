import "./App.css";
import FilterProducts from "./pages/FilterProducts";
// eslint-disable-next-line no-unused-vars
import Main from "./Layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:type" element={<FilterProducts />} />
        <Route path="/products/:type/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
