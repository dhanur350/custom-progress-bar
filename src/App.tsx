import './App.scss';
import { ProgressBar } from './components';

function App() {
  return (
    <div className="App">
      <ProgressBar 
        pillShape 
        isPrompted
        // size='tiny'
      />
    </div>
  );
}

export default App;
