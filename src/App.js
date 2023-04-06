import Footer from './COMPONENTS/Footer';
import Banner from './COMPONENTS/Banner';
import Home from './PAGES/Home';
// import Fiche from './PAGES/Fiche';
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
          {/* <Route path="/Fiche" element={<Fiche />}/> */}

          
          <Route path="/Propos" element={<Propos />}/>

          
          <Route path="*" element={<Error />}/>
            
        </Routes>
        <Footer />
      
      </div>
    
  );
}

/*
          <Route exact path="/" element={<Home />}/>
            
          <Route path="/Fiche" element={<Fiche />}/> 
          
            
          <Route path="/Propos" element={<Propos />}/>
        

          <Route path="/." element={<Error />}/>
*/
export default App;

/* probleme sur le switch
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

/*
<div>
        <Banner />
        <Switch>
          
          <Route exact path="/" element={<Home />}/>
            
          <Route path="/Fiche" element={<Fiche />}/> 
          
            
          <Route path="/Propos" element={<Propos />}/>
        
          <Route path="/" element={<Error />}/>
        </Switch>
        <Footer />
      </div>
*/