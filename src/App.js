import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <div className="App">
      <section className="one"><Header/></section>
      <section className="two"><Intro/></section>
      <section className="three"><Projects></Projects></section>
    </div>
  );
}

export default App;
