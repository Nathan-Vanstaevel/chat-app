import React from 'react';
import './Chat.css';

function Contact({ Name, Avatar, Online }) {
  return (
    <div className='Contact'>
      <img className='avatar' src={Avatar} alt={Name} />
      <div className='name'>
        {Name}
        <p className='status'>
          <span className='status-online'></span>
          {Online ? 'online' : 'offline'}
        </p>
      </div>
    </div>
  );
}

export default Contact;
