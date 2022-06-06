import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import PaginationComp from "./PaginationComp";
const AllMovies = () => {
   const [products, setProducts] = useState([]);

   const getData = async () => {
      let data = await fetch("http://localhost:5000");
      data = await data.json();
      setProducts(data.products);
   };

   useEffect(() => {
      getData();
   }, []);
   return (
      <>
         <div className="container">
            {products.map((e) => (
               <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={e.link} />
                  <Card.Body>
                     {e.bestseller ? (
                        <Card.Subtitle className="text-muted">
                           {e.bestseller}
                        </Card.Subtitle>
                     ) : null}
                     <Card.Title>{e.title}</Card.Title>
                     <Card.Subtitle className={"text-muted text-capitalize"}>
                        {e.category}
                     </Card.Subtitle>
                     <Card.Text>{e.rating}</Card.Text>
                     <Card.Text>₹ {e.price}</Card.Text>
                  </Card.Body>
               </Card>
            ))}
         </div>
         <PaginationComp />
      </>
   );
};

export default AllMovies;
