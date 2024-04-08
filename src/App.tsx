import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { ThemeProvider } from "shared/theme";
import { persistor, store } from "shared/store";
import { RootNavigator } from "shared/navigation";

const App = () => (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
export default App;
