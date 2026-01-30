import React, { useEffect } from 'react';
import Home from './components/Home';
import AOS from 'aos';

function App() {
  useEffect(() => {
    // Global AOS initialization
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }
      AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;