import "./App.css";
import FilterProducts from "./pages/FilterProducts";
import Main from "./Layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useSelector } from "react-redux";

function App() {
  const userLogin = useSelector((state) => state.auth.authorUser);
  console.log(userLogin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userLogin ? <Main /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:type" element={<FilterProducts />} />
        <Route path="/products/:type/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
