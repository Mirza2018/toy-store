import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Login/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import AllToys from './Pages/Alltoys/AllToys.jsx';
import AddToys from './Pages/AddToys/AddToys.jsx';
import ToyDetails from './Pages/ToyDeatils/ToyDetails.jsx';
import MyToys from './Pages/MyToys/MyToys.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/addtoys',
        element: <AddToys></AddToys>
      },
      {
        path: '/mytoys',
        element: <MyToys></MyToys>,
        
      },
      {
        path: '/toys/:id',
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
      },
    ]
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);