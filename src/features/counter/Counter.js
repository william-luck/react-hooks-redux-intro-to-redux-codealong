import React from "react";
// Two necessary imports for changing and accessing state
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  // read from the Redux store
  // Takes a callback function, whatever the callback function returns is assigned to items.
  // Also responsible for re-rendering, causing the componnent to re-render whenever state.items changes 
  const items = useSelector((state) => state.items);

  // gives us the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  function handleOnClick() {
    // dispatching an action on click
    dispatch({ type: "count/increment" });
  }

  return (
    <div>
      <button onClick={handleOnClick}>Click</button>
      <p>{items.length}</p>
    </div>
  );
}

export default Counter;
