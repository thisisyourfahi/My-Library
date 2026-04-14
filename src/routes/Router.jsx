import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import BookDetails from "../pages/BookDetails";
import ListedBooks from "../components/listedbooks/ListedBooks";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true, Component: Home
            },
            {
                path: '/books', Component: ListedBooks
            }, 
            {
                path: '/bookDetails/:bookId',
                Component: BookDetails,
                loader: () => fetch('/booksData.json')
            }
        ],
        errorElement: <ErrorPage />
    }
])