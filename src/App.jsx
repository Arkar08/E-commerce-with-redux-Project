import "./App.css";
import FilterProducts from "./Layout/FilterProducts";
import Main from "./Layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:type" element={<FilterProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
