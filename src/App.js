import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import send from './images/send.png'

function App() {
  return (
    <div className="App">
        <Input className='btn'/>
        <Button className='btn' text='Submit' image={send}></Button>
    </div>
  );
}

export default App;
