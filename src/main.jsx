import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./Routes/Routers.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={Routers} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
