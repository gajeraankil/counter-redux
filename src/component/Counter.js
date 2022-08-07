import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrAction, incrAction } from "../redux/action/counter.action";

const Counter = () => {
  const dispatch = useDispatch();
  const co = useSelector((state) => state.counter);

  const handleIncr = () => {
    dispatch(incrAction());
  };

  const handleDecr = () => {
    dispatch(decrAction());
  };

  return (
    <>
      <section className="py-5 mb-5">
        <div className="container">
          <h1 className="text-center">Use Redux</h1>
          <h2 className="text-center mb-5" style={{ fontSize: "72px" }}>
            {co.counter}
          </h2>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-lg btn-outline-danger shadow-none mx-1"
              onClick={() => handleDecr()}
            >
              DECR
            </button>
            <button
              type="button"
              className="btn btn-lg btn-outline-success shadow-none mx-1"
              onClick={() => handleIncr()}
            >
              INCR
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
