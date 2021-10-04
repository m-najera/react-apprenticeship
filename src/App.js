import logo from './logo.svg';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import InputComponent from './components/InputComponent';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <ButtonCounter />
      <InputComponent labelContent="Write your name"/>
      <InputComponent labelContent="Write your favorite food"/>
      <InputComponent labelContent="Write your favorite pet"/>
    </div>
  )
}

export default App;
