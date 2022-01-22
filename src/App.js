import './App.css';
import Header from './components/Header';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <footer>
        <p>Create the perfect itinerary for your next adventure</p>
      </footer>
    </div>
  );
}

export default App;
