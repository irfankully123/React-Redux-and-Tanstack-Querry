import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ErrorPage from '../pages/ErrorPage.jsx'
import Products from "../pages/Products.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/products",
        element: <Products></Products>,
        errorElement: <ErrorPage />
    }
]);

export default router;