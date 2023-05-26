import './App.css';
import Myform from './components/Myform';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <Myform user={{name: "Ariovaldo", email: "josias@gmail.com"}} />
    </div>
  );
}

export default App;
