import "./App.css";
import FilterProducts from "./Layout/FilterProducts";
import Main from "./Layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:type" element={<FilterProducts />} />
        <Route path="/products/:type/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
