/* eslint-disable @typescript-eslint/no-unused-vars */

// import ReactDOM from "react-dom/client";
// // import App from "./App.tsx";

// import "./index.css";
// import { Provider } from "react-redux";
// import { router } from "./Routes/Routes.tsx";
// import { RouterProvider } from "react-router-dom";
// import "aos/dist/aos.css";
// import { HelmetProvider } from "react-helmet-async";
// import { ToastContainer } from "react-toast";
// import store from "./redux/store.ts";
// import React from "react";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <div className=" mx-auto max-w-screen-xl">
//       <Provider store={store}>
//         <HelmetProvider>
//           <RouterProvider router={router} />
//           <ToastContainer />
//         </HelmetProvider>
//       </Provider>
//     </div>
//   </React.StrictMode>
// );

// src/Layout/Main.tsx

// src/Layout/Main.tsx

// src/Layout/Main.tsx

import ReactDOM from "react-dom/client";
// import App from "./App.tsx";

import "./index.css";
import { Provider } from "react-redux";
import { router } from "./Routes/Routes.tsx";
import { RouterProvider } from "react-router-dom";
import "aos/dist/aos.css";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toast";
import store from "./redux/store.ts";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className=" mx-auto max-w-screen-xl">
      <Provider store={store}>
        <HelmetProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </HelmetProvider>
      </Provider>
    </div>
  </React.StrictMode>
);
