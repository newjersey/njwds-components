import './App.css';
import { MyComponent, defineCustomElements } from 'react-library';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <MyComponent first="{Test First Name}" last="{Test Last Name}" />
    </div>
  );
}

export default App;