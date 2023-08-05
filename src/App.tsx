import { isPropertySignature } from 'typescript';
import './App.css';
import './components/Styles.css'
import {Header} from './components/Header'
import {Body} from './components/Body'
import { GlobalProvider } from './context/GlobalState';
import { HashRouter } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { RMPPage } from './pages/RMPPage';
import { FolioPage } from './pages/FolioPage';
import { ComparePage } from './pages/ComparePage';
import { SubmitPage } from './pages/SubmitPage';
import { RMPSubmit } from './components/RMPSubmit';
import {FolioEdit} from './components/FolioEdit';
import { ComparePageOne } from './pages/ComparePageOne';
import { ComparePageTwo } from './pages/ComparePageTwo';

/*
Router Paths 
*/

const router = createHashRouter(
  [
  {
    path: "/",
    element: <Body/>,
  },
  {
    path: "/RMP",
    element: <RMPPage/>
  },
  {
    path: "/Folio",
    element: <FolioPage/>
  },
  {
    path: "/Compare",
    element: <ComparePage/>
  },
  {
    path: "/SubmitPage",
    element: <SubmitPage/>
  },
  {
    path: "/RMPSubmit",
    element: <RMPSubmit/>
  },
  {
    path: "/FolioEdit",
    element: <FolioEdit/>
  },
  {
    path: "/ComparePageOne",
    element: <ComparePageOne/>
  },
  {
    path: "/ComparePageTwo",
    element: <ComparePageTwo/>
  }
  
]);

/*
Global provider wrapped
Main App in index.ts (passed as prop here)
*/
function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <RouterProvider router={router}/>
    </div>
    </GlobalProvider>
  );
}

export default App;
