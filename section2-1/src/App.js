import React, { useState } from "react";

function App() {
  const [value, setValue] = useState();
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const [menu, setMenu] = useState(["isPrime", "isFibonacci"]);
  const [func, setFunc] = useState("isPrime");
  const handleSelected = (e) => {
    console.log(menu[e.target.value]);
    setFunc(menu[e.target.value]);
  };
  const selected = menu.map((selected) => selected);

  function output(value) {
    let isPrime = true;

    if (value === 1) {
      isPrime = false;
    } else if (value > 1) {
      for (let i = 2; i < value; i++) {
        if (value % i === 0) {
          isPrime = false;
          break;
        }
      }
    } else {
      isPrime = false;
    }

    let isFibonacci = false;
    let num1 = Math.sqrt(5 * Math.pow(value, 2) + 4);
    let num2 = Math.sqrt(5 * Math.pow(value, 2) - 4);

    if (num1 === Math.floor(num1) || num2 === Math.floor(num2)) {
      isFibonacci = true;
    } else {
      isFibonacci = false;
    }
    console.log(`${value} isPrime: ${isPrime} | isFibonacci: ${isFibonacci}`);

    if (isPrime && func === "isPrime") {
      return `true`;
    } else if (isFibonacci && func === "isFibonacci") {
      return `true`;
    } else {
      return `false`;
    }
  }

  return (
    <div style={{ display: "flex" }}>
      {/* input */}
      <div
        style={{
          minWidth: "200px",
          height: "100vh",
          border: "1px solid rgba(0, 0, 0,1)",
        }}
      >
        <input placeholder="input number" value={value} onChange={onChange} />
      </div>
      {/* dropdown */}
      <div
        style={{
          width: "100%",
          minWidth: "100px",
          height: "100vh",
          border: "1px solid rgba(0, 0, 0,1)",
        }}
      >
        <select onChange={(e) => handleSelected(e)}>
          {selected.map((func, key) => (
            <option key={key} value={key}>
              {func}
            </option>
          ))}
        </select>
      </div>
      {/* output */}
      <div
        style={{
          minWidth: "300px",
          height: "100vh",
          border: "1px solid rgba(0, 0, 0,1)",
        }}
      >
        <div>{output(value)}</div>
      </div>
    </div>
  );
}

export default App;
