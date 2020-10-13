import React from 'react';
import './Chat.css';

function Contact(props) {
  return (
    <div className='Contact'>
      <img className='avatar' src={props.avatar} alt={props.name} />
      <div className='name'>
        {props.name}
        <p className='status'>
          <span className='status-online'></span>
          {props.online ? 'online' : 'offline'}
        </p>
      </div>
    </div>
  );
}

export default Contact;
