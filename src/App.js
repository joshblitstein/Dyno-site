import logo from './logo.svg';
import './App.scss';
import Lobby from './component/Lobby/Lobby'
import Gen from './component/gen/Gen'
import Audio from './component/audio-stuff/Audio'
import Price from './component/pricing/Price'
import Topbar from './component/topbar/Topbar'
import Flex from './component/design-flex/Flex'
import Contact from './component/contact/Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Software from './component/software/Software';

function App() {
  return (
    
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
     {/* <Router> */}
         <Topbar /> 
        <div className='sections'>
        <Lobby />
        <Gen />
        <Price />
        <Software />
        <Flex />
        <Contact />
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
