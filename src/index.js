import React from 'react';
import './index.css';
import { createRoot } from "react-dom/client";
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path : "/adduser",
    element:(
      <AddUser/>
    )
  },
  {
    path : "/edit-user/:id",
    element : (
      <EditUser/>
    )
  },
  {
    path : "/userdetails/:id",
    element : (
      <ViewUser/>
    )
  }
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


