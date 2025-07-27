import { useRef, useState } from "react";
function BmiResult({ bmi }) {
  if (bmi < 18.5) {
    return <h1>under weight</h1>;
  }
  if (bmi < 30) {
    return <h1>Over weight</h1>;
  }
  return <h1>normal weight</h1>;
}
function BMI() {
  const weight = useRef(null);
  const height = useRef(null);
  const [bmi, setBmi] = useState(0.0);
  const bmiCalculator = () => {
    let w = parseInt(weight.current.value);
    let h = parseInt(height.current.value);
    let result = w / (h * h);
    setBmi(result);
  };
  return (
    <div>
      <label>Enter Weight in Kilo</label>
      <input type="text" ref={weight} />
      <br />
      <label>Enter Height</label>
      <input type="text" ref={height} />
      <button onClick={bmiCalculator}>cal bmi</button>
      <BmiResult bmi={bmi} />
    </div>
  );
}
export default BMI;
