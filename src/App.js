import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom"
import firebase from "firebase";
import { Header } from './components/header'
import { Index } from './components/pages/landing'

function App() {

  const db = firebase.firestore();

  return (
    <div className="App">
      
      <Router>
        <Header />
          <Routes>
            {/* Index */}
            <Route exact path="/" element={<Index/>} />
            {/* Product */}
            <Route path="/fighter/:id" element={<Fighter/>} />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
