import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex gap-6 mt-10 ml-10">
        <button
          onClick={() => dispatch(increment())}
          className="border-2 border-green-500 rounded-md px-2 py-3"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="border-2 border-green-500 rounded-md px-2 py-3"
        >
          Increment by value
        </button>
        <div>{count}</div>
        <button
          onClick={() => dispatch(decrement())}
          className="border-2 border-red-500 rounded-md px-2 py-3"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
