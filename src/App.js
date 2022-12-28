import "./App.css";
import HelloWorld from "./components/HelloWorld";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [randomUsers, setUsers] = useState("");
  const exampleRef = useRef(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div className="App">
      {/* string:{string} */}
      <input
        // value={string}
        ref={exampleRef}
        onChange={(e) => {
          setUsers(e.target.value);
        }}
      />
      <ul>
        {randomUsers ? (
          randomUsers.map((item) => (
            <li key={item.id.value}>
              {item.name.first}
              <span> </span>
              {item.name.last}
              <span> </span>
              <img src={item.picture.large} alt="profile picture"></img>
            </li>
          ))
        ) : (
          <span>Cargando Usuarios</span>
        )}
      </ul>
    </div>
  );
}

export default App;
