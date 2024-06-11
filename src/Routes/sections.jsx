import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { lazy, Suspense } from "react";



const MainLayout = lazy(() => import("../Layout/Layout"));
const Home = lazy(() => import("../pages/Home"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Blog = lazy(() => import("../pages/Blog"));
const Customers = lazy(() => import("../pages/Customers"));
const Orders = lazy(() => import("../pages/Orders"));
const Reports = lazy(() => import("../pages/Reports"));




const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/products",
                element: <Dashboard />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/customers",
                element: <Customers />
            },
            {
                path: "/orders",
                element: <Orders />
            },
            {
                path: "/reports",
                element: <Reports />
            },
        ]
    },
    // {
    //     path: '/login',
    //     element: <LoginPage />
    // }
])

const AppRoutes = () => {
  return (
    <Suspense fallback={<CircularProgress style={{ display: 'flex', margin: 'auto', height: '100vh'}} />}>
        <RouterProvider router={router}></RouterProvider>
    </Suspense>
  )
}

export default AppRoutes