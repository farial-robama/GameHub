import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import GameDetails from "../Pages/Games/GameDetails";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import LoadingSpinner from "../Components/LoadingSpinner";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import MyProfile from "../Pages/Profile/MyProfile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import Games from "../Pages/Games/Games";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/games",
        element: (
          <PrivateRoute>
            <Games></Games>
          </PrivateRoute>
        ),
        loader: () => fetch("/games.json"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/game-details/:id",
        element: (
          <PrivateRoute>
            <GameDetails></GameDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/games.json").then((res) => res.json()),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
]);
export default router;
