import { isPropertySignature } from 'typescript';
import './App.css';
import './components/Styles.css'
import {Header} from './components/Header'
import {Body} from './components/Body'
import { GlobalProvider } from './context/GlobalState';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { RMPPage } from './pages/RMPPage';
import { FolioPage } from './pages/FolioPage';
import { ComparePage } from './pages/ComparePage';
import { SubmitPage } from './pages/SubmitPage';
import { RMPSubmit } from './components/RMPSubmit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
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
