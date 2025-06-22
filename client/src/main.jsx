import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./routes/AppRouter";
import { ThemeProvider } from "./context/ThemeContext";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
          <AppRouter />
          </ThemeProvider>
          <Toaster richColors/>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
