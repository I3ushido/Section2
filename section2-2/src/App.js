import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
const URL = "https://api.publicapis.org/categories";
function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    axios(URL)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setFilter(response.data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, []);

  const handleFilter = (e) => {
    let value = e.target.value;
    let result = [];
    result = data.filter((data) => {
      return data.search(value) != -1;
    });
    setFilter(result);
  };

  return (
    <div className="App">
      <div>
        <h2>Search Something!</h2>
        <input type="text" onChange={(e) => handleFilter(e)} />
      </div>
      <div style={{ margin: "50px" }}>
        {filter.map((data, key) => {
          return (
            <div key={data}>
              <div>{data}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
