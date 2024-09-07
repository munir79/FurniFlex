import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayOut/MainLayOut.jsx';
import Home from './Page/Home/Home.jsx';
import Product from './Page/Product/Product.jsx';
import CateGorey from './Page/Categorey/CateGorey.jsx';
import Custom from './Page/Custom/Custom.jsx';
import Blog from './Page/Blog/Blog.jsx';
import SignUp from './Authentication/SignUp.jsx';
import LogIn from './Authentication/LogIn.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import ShopingCart from './ShopingCart/ShopingCart.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import Payment from './Payment/Payment.jsx';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/product',
        element:<Product></Product>
      },
      {
        path:'/categorey',
        element:<CateGorey></CateGorey>
      },
      {
        path:'/custom',
        element:<Custom></Custom>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/shoap',
        element:<PrivateRoute><ShopingCart></ShopingCart></PrivateRoute>
      },
      {
        path:'/payment',
        element:<Payment></Payment>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
  <QueryClientProvider client={queryClient}>
  <div className='max-w-7xl mx-auto'>
   <RouterProvider router={router}>
    <App />
    </RouterProvider>
   </div>
  </QueryClientProvider>
   </AuthProvider>
  </StrictMode>,
)
