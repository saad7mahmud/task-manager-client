import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EditTodo from "../Dashboard/EditTodo";
import FAQ from "../Home/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
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
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/dashboard/updateTodo/:id",
        element: <EditTodo></EditTodo>,
        loader: ({ params }) =>
          fetch(
            `https://task-manager-server-snowy.vercel.app/updateTodo/${params.id}`
          ),
      },
    ],
  },
]);
