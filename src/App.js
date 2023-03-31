import Footer from './COMPONENTS/Footer';
import Banner from './COMPONENTS/Banner';
import Home from './PAGES/Home';
import Fiche from './PAGES/Fiche';
import Propos from './PAGES/Propos';
import Error from './PAGES/Error';

import './CSS/App.css';
//import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    
      <div>
        <Banner />
        
          
        <Home />
          
          
        <Fiche />
          
          
        <Propos />
          
          
        <Error />
          
        
        <Footer />
      </div>
    
  );
}

export default App;

/*
      <Router>
        <Banner />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Fiche">
            <Fiche />
          </Route>
          <Route path="/A-Propos">
            <Propos />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
*/