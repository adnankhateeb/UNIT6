import "./App.css";
import TableFn from "./Components/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import AddCountry from "./Components/AddCountry";
import AddCity from "./Components/AddCity";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<TableFn />}></Route>
            <Route path="/add-country" element={<AddCountry />}></Route>
            <Route path="/add-city" element={<AddCity />}></Route>
         </Routes>
      </div>
   );
}

export default App;
