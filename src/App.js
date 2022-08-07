import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import IndividualUser from "./Components/IndividualUser";

function App() {
  const [randomUsers, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
      .then((res) => res.json())
      .then((users) => setUsers(users.results));
  }, []);

  return (
    <div className="App">
      <ul>
        {randomUsers.map((user, index) => (
          <IndividualUser person={user} key={index} i={index} />
        ))}
      </ul>
    </div>
  );
}

export default App;
