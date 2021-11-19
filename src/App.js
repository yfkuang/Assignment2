import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Content } from './components/content';
import { Index } from './components/pages/landing'
import { Product } from './components/pages/product'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Content>
          <Routes>
            {/* Index */}
            <Route exact path="/" element={<Index/>} />
            {/* Product */}
            <Route path="/product/:id" element={<Product/>} />
          </Routes>
        </Content>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
