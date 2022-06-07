import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
   const [products, setProducts] = useState([]);

   const getData = async () => {
      let data = await fetch("http://localhost:5000/products");
      data = await data.json();
      console.log("data:", data);
      setProducts(data);
   };

   useEffect(() => {
      getData();
   }, []);
   return (
      <div className="container">
         {products.map((e) => (
            <Link to={`/products/${e._id}`}>
               <Card
                  style={{ width: "18rem", height: "400px" }}
                  onClick={() => {}}
               >
                  <Card.Img
                     variant="top"
                     src={e.productImgLink}
                     style={{ height: "60%" }}
                  />
                  <Card.Body>
                     <Card.Title className={"title"}>
                        {e.productName}
                     </Card.Title>
                     <Card.Text>₹ {e.productPrice}</Card.Text>
                  </Card.Body>
               </Card>
            </Link>
         ))}
      </div>
   );
};

export default Products;
