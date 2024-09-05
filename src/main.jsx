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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-7xl mx-auto'>
   <RouterProvider router={router}>
    <App />
    </RouterProvider>
   </div>
  </StrictMode>,
)
