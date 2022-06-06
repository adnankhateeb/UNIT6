import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import PaginationComp from "./PaginationComp";
import { useSearchParams } from "react-router-dom";

const Products = () => {
   const [products, setProducts] = useState([]);
   const [pageNumber, setPageNumber] = useState(1);
   const [totalPages, setTotalPages] = useState(0);
   const [sortBy, setSortBy] = useState(null);
   const [filter, setFilter] = useState(null);

   const [searchParams, setSearchParams] = useSearchParams();

   const getData = async () => {
      let data = await fetch(
         `http://localhost:5000/products?page=${pageNumber}&limit=12&sort=${sortBy}`
      );
      data = await data.json();
      setProducts(data.products);
      setTotalPages(data.totalPages);
   };

   const handleChange = (e) => {
      setSortBy(e.target.value);
      setSearchParams({ page: pageNumber, sort: sortBy });
   };

   useEffect(() => {
      getData();
   }, [pageNumber, sortBy]);
   return (
      <>
         <div className="sorting">
            <label htmlFor="sort">Sort By Price</label>
            <select name="sort" id="" onChange={handleChange}>
               <option value="">-----</option>
               <option value="h2l">High To Low</option>
               <option value="l2h">Low To High</option>
            </select>

            <label htmlFor="filterCat">Filter</label>
            <select name="filterCat" id="">
               <option></option>
               <option></option>
            </select>
         </div>
         <div className="container">
            {products.map((e) => (
               <Card style={{ width: "18rem" }} className="cardBS">
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
         <PaginationComp
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalPages={totalPages}
         />
      </>
   );
};

export default Products;
