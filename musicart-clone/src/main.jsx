import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Homepage';
import Collection from './Collectionpage';
import Collections from './Collections';
import Likes from './Likes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "collection",
    element: <Collection />,
    children:[
      {
        path: "collections",
        element: <Collections/>, 
      },
      {
        path: "likes",
        element: <Likes/>,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
