import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, increamentByAmount } from "./Store/Reducers/CounterSlice";


export default function Counter() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-800">
      <div className="container w-[60%] h-64 border-white border-4 rounded-xl">
        <div className="counter flex justify-center p-10 ">
          <h1 className="font-bold text-white text-5xl">Counter : {value}</h1>
        </div>
        <div className="button flex justify-center gap-5 ">
          <button
            onClick={() => dispatch(increament())}
            className=" font-semibold text-white border-2 px-3 py-2 rounded bg-green-500 text-xl hover:bg-green-900"
          >
            Increament{" "}
          </button>
          <button
            onClick={() => dispatch(decreament())}
            className=" font-semibold text-white border-2 px-3 py-2 rounded bg-red-500 text-xl hover:bg-red-900"
          >
            Decreament{" "}
          </button>
          <button
            onClick={() => dispatch(increamentByAmount(5))}
            className=" font-semibold text-white border-2 px-3 py-2 rounded bg-yellow-500 text-xl hover:bg-yellow-900"
          >
            Increament by 5{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

