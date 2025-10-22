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


const router = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                index: true,
                element: <Home></Home>
            }
        ]
    },
    // {
    //     path: "/auth",
    //     element: <AuthLayout></AuthLayout>,
    //     children:[
    //         {
    //             path: "login",
    //             element: <Login></Login>
    //         },
    //         {
    //             path: "register",
    //             element: <Register></Register>
    //         }
    //     ]
    // },
    // {
    //     path: "/game-details/:id",
    //     element: <PrivateRoute>
    //         <GameDetails></GameDetails>
    //     </PrivateRoute>,
    //     loader: () => fetch("/games.json"),
    //     hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>
    // },
    // {
    //     path: "*",
    //     element: <NotFound></NotFound>
    // }
])
export default router;