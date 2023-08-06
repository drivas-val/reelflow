import { isPropertySignature } from 'typescript';
import './App.css';
import './components/Styles.css'
import {Header} from './components/Header'
import {Body} from './components/Body'
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

/*
Global provider wrapped
Main App in index.ts (passed as prop here)
*/
function App() {
  return (
    <div className="App">
    </div>
    // </GlobalProvider>
  );
}

export default App;
