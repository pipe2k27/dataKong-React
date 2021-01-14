import './App.css';
import Navbar from './Components/Navbar'
import FirstCard from './Components/FirstCard'
import SecondCard from './Components/SecondCard'
import Contact from './Components/Contact'
import Privacy from './Components/Privacy'


import Footer from './Components/Footer'

import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/'>
            <FirstCard />
            <SecondCard />
          </Route>
          <Route path='/start'>
            <Contact />
          </Route>
          <Route path='/privacy'>
            <Privacy />
          </Route>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
