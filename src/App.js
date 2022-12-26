import Table from './components/Table'
import './App.css';
import DateSetter from './components/DateSetter';


function App() {
  return (
    <div className="App">
      <h2 className='container mt-5'>Analytics</h2>
      <DateSetter/>
    <Table/>
    </div>
  );
}

export default App;
