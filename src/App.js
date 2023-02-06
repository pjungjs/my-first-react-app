import './App.css';
import Event from './components/Event';
import Location from './components/Location';

function App() {
  const concertDate = ["Tue Feb 14", "Sun Mar 26", "Sat Apr 22", "Fri May 5", "Fri Jun 2", "Mon Jul 24"];
  return (
    <div className="App">
      {/* create a property called arena and passed it to the Location component */}
      <Location arena="Madison Square Garden" />
      {/* with props, data can only be passed down */}
      <Event artist="Billy Joel" date={concertDate} time="8:00 PM" />
    </div>
  );
}

export default App;
