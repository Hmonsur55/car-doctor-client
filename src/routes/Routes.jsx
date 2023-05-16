import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import Bookings from "../pages/Bookings/Bookings";
import BookService from "../pages/BookService/BookService";
import Home from "../pages/Home/Home/Home";
import PriveteRoute from "./PriveteRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/book/:id",
        element: (
          <PriveteRoute>
            <BookService></BookService>
          </PriveteRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/checkout/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PriveteRoute>
            <Bookings></Bookings>
          </PriveteRoute>
        ),
      },
    ],
  },
]);

export default router;
