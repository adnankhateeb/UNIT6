import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateProduct from "./Components/CreateProduct";
import CreateReview from "./Components/CreateReview";
import CreateUser from "./Components/CreateUser";
import EditProduct from "./Components/EditProduct";
import EditUser from "./Components/EditUser";
import NavBar from "./Components/Navbar";
import Products from "./Components/Products";
import ProductShowCase from "./Components/ProductShowCase";
import Review from "./Components/Review";
import UserDetails from "./Components/UserDetails";
import Users from "./Components/Users";

function App() {
   return (
      <div className="App">
         <NavBar />
         <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products/:id" element={<ProductShowCase />} />
            <Route path="/products/create" element={<CreateProduct />} />
            <Route path="/products/:id/edit" element={<EditProduct />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/create" element={<CreateUser />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/users/:id/edit" element={<EditUser />} />
            <Route path="/reviews/:productId" element={<Review />} />
            <Route
               path="/reviews/:productID/create"
               element={<CreateReview />}
            />
         </Routes>
      </div>
   );
}

export default App;
