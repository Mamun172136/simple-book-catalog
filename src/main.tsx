import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { router } from "./Routes/Routes.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className=" mx-auto max-w-screen-xl">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  </React.StrictMode>
);
