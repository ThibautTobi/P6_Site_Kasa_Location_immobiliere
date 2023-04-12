import Footer from './COMPONENTS/Footer';
import Banner from './COMPONENTS/Banner';
import Home from './PAGES/Home';
import Fiche from './PAGES/Fiche';
import Propos from './PAGES/Propos';
import Error from './PAGES/Error';

import './CSS/App.css';
import { Route,Routes } from 'react-router-dom'

function App() {
  return (
    
      <div>
        <Banner />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/Fiche/:id" element={<Fiche />}/>
          <Route path="/Propos" element={<Propos />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;