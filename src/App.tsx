import { isPropertySignature } from 'typescript';
import './App.css';
import './components/Styles.css'
import {Header} from './components/Header'
import {Body} from './components/Body'
import { GlobalProvider } from './context/GlobalState';


//import {Greet} from './components/Greet'
// import {Status} from './components/Status'
// import {Button} from './components/Button'
// import {Input} from './components/Input'
// import {Container} from './components/Container'
// import {Form} from './components/Form'



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
