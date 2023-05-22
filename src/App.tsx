import { isPropertySignature } from 'typescript';
import './App.css';
import './components/Styles.css'
import {Header} from './components/Header'
import {Body} from './components/Body'


//import {Greet} from './components/Greet'
// import {Status} from './components/Status'
// import {Button} from './components/Button'
// import {Input} from './components/Input'
// import {Container} from './components/Container'
// import {Form} from './components/Form'
import {MovSearch} from './components/MovSearch'



function App() {
  return (
    <div className="App">
      <Header title="Reel Flow"/>
      <Body/>

      {/* <Greet name = "Bravo" age = {10} isLoggedIn={true}/>
      <Status status="loading"/>
      <Button handleClick={() => {
        console.log("Clicked!");
      }}/>
      <Input value='' handleChange={(event) => console.log(event)}/>
      <Container styles={{border:"1px solid black"}}></Container>
      <Form/>
      <MovSearch/> */}
    </div>
  );
}

export default App;
