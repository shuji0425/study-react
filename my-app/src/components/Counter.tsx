import { useCounterContext } from "../context/CounterContext";

export function Counter() {
  const { count, increment, decrement, reset } = useCounterContext();
  // const [count, setCount] = useState(0);

  return (
    <div>
      <h2>カウンター: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
};