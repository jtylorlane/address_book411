import React from "react";
import { useState } from "react";

const IndividualUser = ({ person, i }) => {
    const [details, showDetails] = useState(false); 
  return (
    <li key={i}>
      <img src={person.picture.thumbnail}></img>
      <p>{`#${i}, Name: ${person.name.first} ${person.name.last}, Age: ${person.dob.age}, Address: ${person.location.city} ${person.location.country} ${person.location.state} ${person.location.street.name}:`}</p>
      {details && (
          <p>details</p>
      )}
      <button onClick={() => showDetails(!details)}>Show Details</button>
      
    </li>
  );
};

export default IndividualUser;
