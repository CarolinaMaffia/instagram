import './App.scss';

//components
import Navigation from "./components/Navigation/Navigation";
import Cards from './components/Cards/Cards';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
