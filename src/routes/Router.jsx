import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Books from "../pages/Books";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true, Component: Home
            },
            {
                path: '/books', Component: Books
            }
        ],
        errorElement: <ErrorPage />
    }
])