import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import UserInfo from "../pages/UserInfo";
import Users from "../pages/Users";

export const main_routes = [
    {
        path: "/",
        Component: HomePage
    },
    {
        path: "/Profile",
        Component: Profile
    },
    {
        path: "/Users",
        Component: Users
    },
    {
        path: "/Login",
        Component: Login
    },
    {
        path: "/Signup",
        Component: Signup
    },
    {
        path: "/UserInfo/:id",
        Component: UserInfo
    }
];