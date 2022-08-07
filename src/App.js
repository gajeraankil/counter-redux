import React from "react";
import Counter from "./component/Counter";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  const { store, persistor } = configureStore();
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Counter />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
