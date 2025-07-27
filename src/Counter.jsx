import { useState } from "react";
import "./hello.css";
function Counter() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");
  //   const inputChange = () => {};
  return (
    <div>
      <div className="container">
        <button className="btn add" onClick={() => setCounter(counter + 1)}>
          click me increase
        </button>
        <button className="btn reset" onClick={() => setCounter(0)}>
          click me reset
        </button>
        <button className="btn delete" onClick={() => setCounter(counter - 1)}>
          click me decrease
        </button>
      </div>
      <div>
        <p>You click {counter}</p>
        <p style={{ fontSize: counter >= 10 ? "40px" : "1rem" }}>
          {counter > 10 ? "Too Big" : "Too Small"}
        </p>
      </div>
      <div className="countStr">
        <input
          type="text"
          value={value}
          //   placeholder=""
          onChange={(e) => {
            let v = e.target.value;
            setValue(v);

            console.log(`${v} $ is equal to ${v * 31}`);
          }}
        />
        <p>
          {value} USD to {parseInt(value) * 35} THB
        </p>
      </div>
    </div>
  );
}
export default Counter;
