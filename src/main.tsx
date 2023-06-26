import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./pages/home";
import Root from "./components/Root";
import SignIn from "./pages/sign-in";
import User from "./pages/user";
import NotFound from "./pages/404/404.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <NotFound/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/sign-in', element: <SignIn/>},
            {path: 'user', element: <User/>}
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
