import React from "react";
import Counter from "./component/Counter";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

const App = () => {
  const store = configureStore();
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
};

export default App;
