import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/CardList';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Header />
      <main>
        <CardList />
      </main>
    </Container>
  );
}

export default App;
