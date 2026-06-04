import React from 'react';

import { createBrowserRouter } from 'react-router'
import Root from '../Components/Root';
import Home from '../Components/Home';
import Login from '../Components/Login';



 export const router=createBrowserRouter([
  {
    path:"/",
    Component:Root,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"/login",
        Component:Login
      }
    ]
  }
])