import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Users = () => {
   const [users, setUsers] = useState([]);
   console.log("users:", users);

   const getUsers = async () => {
      let users = await fetch("http://localhost:5000/users");
      users = await users.json();
      //   console.log("users:", users)
      setUsers(users.users);
   };

   useEffect(() => {
      getUsers();
   }, []);
   return (
      <div className='container'>
         {users.map((user) => (
            <Card style={{width: "18rem", padding: "5%"}}>
               <Card.Title>Name: {user.name}</Card.Title>
               <Card.Text>Email: {user.email}</Card.Text>
               <span>Addresses :</span> {user.address.map((elem,i) => (
                  <Card.Text>{i + 1}. {elem}</Card.Text>
               ))}
            </Card>
         ))}
      </div>
   );
};

export default Users;
