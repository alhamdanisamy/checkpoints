import './App.css';
import Header from "./components/Header";
import { Container } from "react-bootstrap";
function App() {
  return(
    <Container fluid className="App">
      <Header hello={6}/>
      <main className="content">

      </main>
      </Container>
  );
};
export default App;
