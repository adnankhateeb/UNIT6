import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ViewOrders = () => {
   const [orders, setOrders] = useState([]);
   console.log("orders:", orders);
   const [total, setTotal] = useState(0);
   console.log("total:", total);

   const { userID } = useParams();
   console.log("userID:", userID);

   const getOrders = async () => {
      const order = await axios
         .get(`http://localhost:5000/orders/${userID}`)
         .then((data) => {
            console.log(data.data);
            setOrders(data.data.orders.productID);
            setTotal(data.data.sum);
         });
   };

   useEffect(() => {
      getOrders();
   }, []);

   return (
      <div style={{marginTop: "5%"}}>
         <h1> Your Order History </h1>
         <div style={{ width: "40%", margin: "auto" }}>
            {orders.length ? (
               <ul>
                  {orders.map((e) => (
                     <li>
                        <b>{e.productName}</b>
                        <i> ₹{e.productPrice}</i>
                     </li>
                  ))}
               </ul>
            ) : (
               <h1>No Order History Found!</h1>
            )}
         </div>
         <div>
            <h1>Total Spent: ₹ {total}</h1>
         </div>
      </div>
   );
};

export default ViewOrders;
