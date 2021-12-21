import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Locations from './components/Locations';
import Attractions from './components/Attractions';
import Itinerary from './components/Itinerary';

function App() {
  return (
    <div className="App">
      <Header />
      <Locations 
      title='Tokyo'
      imageUrl='https://media.istockphoto.com/photos/aerial-view-of-tokyo-cityscape-with-fuji-mountain-in-japan-picture-id1131743616?k=20&m=1131743616&s=612x612&w=0&h=5IzvPM791pd7-TFIB16zl1-CHgcqOBFLbQ9U1d6cUw8='
      body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'


      />
    </div>
  );
}

export default App;
