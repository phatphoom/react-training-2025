import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Hello from "./Hello.jsx";
import Counter from "./Counter.jsx";
import BMI from "./BMI.jsx";
import Shop from "./Shop.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Hello name="test" age={50} /> */}
    {/* <Counter /> */}
    {/* <Counter /> */}
    {/* <BMI /> */}
    <Shop />
  </StrictMode>
);
