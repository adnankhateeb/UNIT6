import { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import PaginationComp from "./PaginationComp";
import { useSearchParams } from "react-router-dom";

const Products = () => {
   const [products, setProducts] = useState([]);
   const [pageNumber, setPageNumber] = useState(1);
   const [totalPages, setTotalPages] = useState(0);
   const [sortBy, setSortBy] = useState("");
   const [filterBy, setFilterBy] = useState("");

   const [searchParams, setSearchParams] = useSearchParams();

   const getData = async () => {
      let data = await fetch(
         `http://localhost:5000/products?page=${pageNumber}&limit=12&sort=${sortBy}&filter=${filterBy}`
      );
      data = await data.json();
      setProducts(data.products);
      setTotalPages(data.totalPages);
   };

   const handleChange = (e) => {
      setSortBy(e.target.value);
   };

   const handleFilter = (e) => {
      setFilterBy(e.target.value);
   };

   useEffect(() => {
      getData();
      setSearchParams({ page: pageNumber, sort: sortBy, filterBy: filterBy });
   }, [pageNumber, sortBy, filterBy]);
   return (
      <>
         <div className="sorting">
            <Form.Select
               aria-label="Default select example"
               className="filterClass"
               name="sort"
               id=""
               onChange={handleChange}
            >
               <option>Sort By Price</option>
               <option value="h2l">High To Low</option>
               <option value="l2h">Low To High</option>
            </Form.Select>

            {/* <label htmlFor="filterCat">Filter By Category</label>
            <select
               className="filterClass"
               name="filterCat"
               id=""
               onChange={handleFilter}
            >
               <option value="">-----</option>
               <option value="health">Health</option>
               <option value="hair">Hair</option>
               <option value="kajal">Kajal</option>
               <option value="face">Face</option>
            </select> */}
            <Form.Select
               aria-label="Default select example"
               className="filterClass"
               name="filterCat"
               id=""
               onChange={handleFilter}
            >
               <option value="">Filter By Category</option>
               <option value="health">Health</option>
               <option value="hair">Hair</option>
               <option value="kajal">Kajal</option>
               <option value="face">Face</option>
            </Form.Select>
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
