import { isPropertySignature } from 'typescript';
import './App.css';
import './components/Styles.css'
import {Header} from './components/Header'
import {Body} from './components/Body'
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Header title="Reel Flow"/>
      <Body/>
    </div>
    </GlobalProvider>
  );
}

export default App;
