import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import ScrollToTop from './components/scroll/ScrollToTop'
import wood from './assets/woodsticks.jpeg'
// import Footer from './components/react-footer/Footer';
import Footer1 from './components/react-footer/Footer1';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App" style={{ backgroundImage: `url(${wood})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <ScrollToTop />
          <Header />

          <MainPages />
        </div>

      </Router>

      <Footer1 />

    </DataProvider>

  );
}

export default App;

//sssUsers/shay_dilouya/Desktop/untitled folder/back