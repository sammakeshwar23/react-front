import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import Company from './Components/Company';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Company></Company>
        <Users></Users>
      </header>
    </div>
  );
}

export default App;
