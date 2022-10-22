import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

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
                    element: <News></News>
                },
            ]
        }
    ]
);