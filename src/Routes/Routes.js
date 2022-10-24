import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import ErrorPage from "../Pages/Others/ErrorPage/ErrorPage";
import PasswordReset from "../Pages/Others/PasswordReset";
import Profile from "../Pages/Others/Profile/Profile";
import TermsAndConditions from "../Pages/Others/TermsAndConditions";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('https://my-dragon-news-server.vercel.app/news')
                },
                {
                    path: '/category/:Id',
                    element: <Category></Category>,
                    loader: ({ params }) => fetch(`https://my-dragon-news-server.vercel.app/category/${params.Id}`)
                },
                {
                    path: '/news/:Id',
                    element: <PrivateRoute><News></News></PrivateRoute>,
                    loader: ({ params }) => fetch(`https://my-dragon-news-server.vercel.app/news/${params.Id}`)
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/terms',
                    element: <TermsAndConditions></TermsAndConditions>
                },
                {
                    path: '/reset-password',
                    element: <PasswordReset></PasswordReset>
                },
                {
                    path: '/profile',
                    element: <PrivateRoute><Profile></Profile></PrivateRoute>
                }

            ]
        }
    ]
);
