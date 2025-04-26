import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { increment, decrement } from "../../store/slices/counterSlice";

const Home: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome to TS FE Boilerplate</h2>
      <p className="mb-4">Counter: {count}</p>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;