import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import Root from "./routes/root"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';


const router = createBrowserRouter([{
  path:"/",
  element:<Root />,
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


