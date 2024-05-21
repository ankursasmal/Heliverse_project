import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BuyNow from './routPage/BuyNow.jsx';
import Purchase from './routPage/Purchase.jsx';
import EnvatoPurchase from './routPage/EnvatoPurchase.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/buy",
    element: <BuyNow />,
  },
  {
    path: "/purchase",
    element: <Purchase />,
  },
  {
    path: "/purchase_envato",
    element: <EnvatoPurchase />,
  },


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
