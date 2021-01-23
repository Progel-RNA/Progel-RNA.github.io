import Content from './content';
import './App.css';

function App() {
  return (
    <div className="App">
      <svg viewbox="0 0 150 150" className="background">
        <circle cx="50%" cy="50%" r="60%"/>
      </svg>
      <Content/>
    </div>
  );
}

export default App;
