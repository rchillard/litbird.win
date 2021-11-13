import './App.css';
import Course from './Course';

function App() {
  return (
    <div className="App">
      <h1>Application</h1>
      <p>This is the parent component that represents the entire application.</p>
      <Course courseName="The Princess and the Pony" id={1} />
    </div>
  );
}

export default App;
