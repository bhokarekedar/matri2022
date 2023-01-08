import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import SignupMain from "../pages/SignupMain";
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
        path: "/login",
        Component: Login
    },
    {
        path: "/Signup",
        Component: Signup
    },
    {
        path: "/SignupMain",
        Component: SignupMain
    },
    //   {
    //     path: "/UserInfo",
    //     Component: UserInfo
    // }
    {
        path: "/UserInfo/:id",
        Component: UserInfo
    }
];