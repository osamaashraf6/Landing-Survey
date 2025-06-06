import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./routes/AppRouter";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <AppRouter />
          {/* <ToastContainer position="top-right" autoClose={3000} /> */}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
