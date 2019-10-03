import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ShopSection from './components/Products/ShopSection';
import TravelSection from './components/Rejser/TravelSection';
import Certifikat from './components/Certifikat/Certifikat';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact className="active" path="/" component={Home} />

          <Route path="/shopsection" component={ShopSection} />

          <Route path="/travelsection" component={TravelSection} />

          <Route path="/certifikat" component={Certifikat} />

          <Route path="/contact" component={Contact} />

          <Route path="/about" component={About} />

        </Switch>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
