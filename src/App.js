import logo from './logo.svg';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import InputComponent from './components/InputComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import { Container } from 'react-bootstrap';
import TodoList from './components/TodoList';

function App() {
  return (
    <Container>
      <MyNavBar />
      <TodoList />
    </Container>
  )
}

export default App;
