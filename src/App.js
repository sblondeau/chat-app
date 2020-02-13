import React from 'react';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <div className="App">
      <Contact name="Ronnie Matthews" avatar="https://randomuser.me/api/portraits/men/86.jpg" online/>
      <Contact name="Wanda Matthews" avatar="https://randomuser.me/api/portraits/women/71.jpg" />
      <Contact name="Everett Neal" avatar="https://randomuser.me/api/portraits/men/69.jpg" online/>

    </div>
  );
}

export default App;
