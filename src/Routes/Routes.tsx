import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddBook from "../pages/AddBook/AddBook";
import UpdateBook from "../pages/UpdateBook/UpdateBook";
import BookDetailsPage from "../pages/BookDetailsPage/BookDetailsPage";
import Login from "../pages/LogIn/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllBooksData from "../pages/AllBooksData/AllBooksData";
import PrivateRoute from "./PrivateRoute";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateBook/:id",
        element: <UpdateBook></UpdateBook>,
      },
      {
        path: "/bookDetailsPage/:id",
        element: <BookDetailsPage></BookDetailsPage>,
      },

      {
        path: "/allBooks",
        element: <AllBooksData></AllBooksData>,
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);
