import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";

import "./index.css";
import { Provider } from "react-redux";
import { router } from "./Routes/Routes.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "aos/dist/aos.css";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer, toast } from "react-toast";
import store from "./redux/store.ts";
// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className=" mx-auto max-w-screen-xl">
      <Provider store={store}>
        <HelmetProvider>
          {/* <QueryClientProvider client={queryClient}> */}
          <RouterProvider router={router} />
          <ToastContainer />
          {/* </QueryClientProvider> */}
        </HelmetProvider>
      </Provider>
    </div>
  </React.StrictMode>
);
