import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import GameDetails from "../Pages/Games/GameDetails";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Components/Loading";

const router = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: "",
                Component: Home,
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/game-details/:id",
        element: <PrivateRoute>
            <GameDetails></GameDetails>
        </PrivateRoute>,
        loader: () => fetch("/games.json"),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: "/*",
        element: <NotFound></NotFound>
    }
])