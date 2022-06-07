import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditProduct from './Components/EditProduct';
import Products from "./Components/Products";
import ProductShowCase from "./Components/ProductShowCase";
import Users from './Components/Users';

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products/:id" element={<ProductShowCase />} />
            <Route path="/products/:id/edit" element={<EditProduct />} />
            <Route path="/users" element={<Users />} />
         </Routes>
      </div>
   );
}

export default App;
