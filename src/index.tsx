import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createHashRouter, RouterProvider } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

import { RMPPage } from './pages/RMPPage';
import { FolioPage } from './pages/FolioPage';
import { ComparePage } from './pages/ComparePage';
import { SubmitPage } from './pages/SubmitPage';
import { RMPSubmit } from './components/RMPSubmit';
import {FolioEdit} from './components/FolioEdit';
import { ComparePageOne } from './pages/ComparePageOne';
import { ComparePageTwo } from './pages/ComparePageTwo';
import { Body } from './components/Body';

const router = createHashRouter([
  {
    path: "/",
    element: <Body />,
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
  {
    path: "FolioEdit",
    element: <FolioEdit/>
  },
  {
    path: "ComparePageOne",
    element: <ComparePageOne/>
  },
  {
    path: "ComparePageTwo",
    element: <ComparePageTwo/>
  }
]);

/*
React dom for milti-page use. 
Renders Main App
*/
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GlobalProvider>
    <RouterProvider router={router}/>
  </GlobalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
