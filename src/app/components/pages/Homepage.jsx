// src/app/components/pages/Homepage.jsx
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../../features/counter/counterSlice";
import { useState } from "react";

export default function Homepage() {
  const count = useSelector((state) => state.counter.value); // Accedi a state.counter.value
  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleNumber = (e) => {
    setNumber(+e.target.value);
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(number));
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleIncrement}>+1</button>
      <div>
        <input type="number" onChange={handleNumber} />
        <button onClick={handleIncrementByAmount}>+x</button>
      </div>
    </div>
  );
}
