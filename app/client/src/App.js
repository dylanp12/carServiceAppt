import logo from './logo.svg';
import './App.css';
import Scheduler from './Scheduler';
import Retrieve from './Retrieve';
import GetApptInRange from './GetApptInRange';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <h1 class="display-s1">
              Dylan's Garage - Service Center
            </h1>
            <h2>
              Book Appointment Below: 

              <Scheduler />
            </h2>
            <h3>
              Retreive:

              <Retrieve />
            </h3>
            <h4>
              Get Appointment in range: 

              <GetApptInRange />
            </h4>
      </header>
    </div>
  );
}

export default App;
