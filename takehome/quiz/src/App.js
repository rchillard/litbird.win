import logo from './logo.svg';
import './App.css';
import Course from './Course';

function App() {
  return (
    <div className="App">
      <h1>Application</h1>
      <p>This is the parent component that represents the entire application.</p>
      <Course />
    </div>
  );
}

export default App;
