import { useState } from "react";
import "./hello.css";
function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}
const ShowMe = function () {
  return <h2>Hello</h2>;
};

const Hello = ({ name, age }) => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick((e) => !e);
  };
  //   let firstName = "Phumiphat";
  //   let birthYear = 2005;
  //   let currentYear = new Date().getFullYear();
  //   let age = currentYear - birthYear;
  return (
    <>
      {/* <h2>
        Hello {firstName.toUpperCase()} {age}
      </h2> */}
      <h2>
        {name} and {age}
      </h2>
      <div id="email">email:phimiphat</div>
      <div className="box yellow-bg">tel:03923823</div>
      <button onClick={handleClick}>click me</button>
      <br />
      {/* {isClick && <ShowMe />} */}
      <p style={{ color: isClick ? "blue" : "red" }}>
        {isClick ? "test" : "not"}
      </p>
      <br />
      <Profile />
      <Profile />
    </>
  );
};
export default Hello;
