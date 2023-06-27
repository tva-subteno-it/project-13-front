import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./pages/home";
import Root from "./components/Root";
import SignIn from "./pages/sign-in";
import Transactions from "./pages/transactions";
import NotFound from "./pages/404";
import signInFormAction from "./components/SignIn/action.ts";
import {ROUTES} from "./constants";
import {store} from "./redux/store.ts";
import {Provider} from "react-redux";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <NotFound/>,
        children: [
            {path: ROUTES.HOME, element: <Home/>},
            {
                path: ROUTES.LOGIN, element: <SignIn/>, action: signInFormAction
            },
            {path: ROUTES.TRANSACTIONS, element: <Transactions/>}
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
)
