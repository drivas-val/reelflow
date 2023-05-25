import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RMPPage } from './pages/RMPPage';
import { FolioPage } from './pages/FolioPage';
import { ComparePage } from './pages/ComparePage';
import { SubmitPage } from './pages/SubmitPage';
import { RMPSubmit } from './components/RMPSubmit';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "RMP",
    element: <RMPPage/>
  },
  {
    path: "Folio",
    element: <FolioPage/>
  },
  {
    path: "Compare",
    element: <ComparePage/>
  },
  {
    path: "SubmitPage",
    element: <SubmitPage/>
  },
  {
    path: "RMPSubmit",
    element: <RMPSubmit/>
  },

  
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
