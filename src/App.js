import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Contact {...person1} />
      <Contact {...person2} />
      <Contact {...person3} />
    </div>
  );
}

const person1 = {
  Name: 'Kaylee Jones',
  Avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
  Online: true,
};

const person2 = {
  Name: 'Earl Arnold',
  Avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
  Online: false,
};

const person3 = {
  Name: 'Leah Dean',
  Avatar: 'https://randomuser.me/api/portraits/women/95.jpg',
  Online: true,
};

export default App;
