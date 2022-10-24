import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
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
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: ()=> fetch('http://localhost:5000/news')
                },
                {
                    path: '/category/:Id',
                    element: <Category></Category>,
                    loader: ({params})=> fetch(`http://localhost:5000/category/${params.Id}`)
                },
                {
                    path: '/news/:Id',
                    element: <PrivateRoute><News></News></PrivateRoute>,
                    loader: ({params})=> fetch(`http://localhost:5000/news/${params.Id}`)
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
