import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';


function App() {
  
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
    
  );
}

export default App;