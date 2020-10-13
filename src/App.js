import React from 'react';
import Contact from './components/Contact';

function App() {
  return <Contact {...person} />;
}

const person = {
  Name: 'Kaylee Jones',
  Avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
  Online: true,
};

export default App;
