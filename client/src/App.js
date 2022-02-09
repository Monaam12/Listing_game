import './App.css';
import SelectTopByPlayers from './components/SelectTopByPlayers';
import SelectTopByPlaytime from './components/SelectTopByPlaytime';

function App() {
  return (
    <div className="App">
      <SelectTopByPlayers />
      <SelectTopByPlaytime />
    </div>
  );
}

export default App;
