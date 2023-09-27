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
import AddItems from './Pages/AdditemsDetails/AddItems.jsx';
import ItemsUpdateAndDelete from './Pages/ItemsUpdateandDelete/ItemsUpdateAndDelete.jsx';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute.jsx';

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
        element: <PrivetRoute><AddToys></AddToys></PrivetRoute>
      },
      {
        path: '/additems',
        element: <PrivetRoute><AddItems></AddItems></PrivetRoute>
      },
      {
        path: '/mytoys',
        element: <PrivetRoute><MyToys></MyToys></PrivetRoute>
      },
      {
        path: '/toys/:id',
        element: <PrivetRoute><ToyDetails></ToyDetails></PrivetRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path: '/additems/:id',
        element: <PrivetRoute><ToyDetails></ToyDetails></PrivetRoute>,
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