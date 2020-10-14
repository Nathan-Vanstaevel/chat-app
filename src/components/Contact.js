import React from 'react';
import './Chat.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: true,
    };
  }

  render() {
    return (
      <div className='Contact'>
        <img className='avatar' src={this.props.avatar} alt={this.props.name} />
        <div className='name'>
          {this.props.name}
          <p className='status'>
            <span
              className={this.state.online ? 'status-online' : 'status-offline'}
              onClick={(event) => {
                const newOnline = !this.state.online;
                this.setState({ online: newOnline });
              }}
            ></span>
            {this.state.online ? 'online' : 'offline'}
          </p>
        </div>
      </div>
    );
  }
}

// function Contact(props) {
//   return (
//     <div className='Contact'>
//       <img className='avatar' src={props.avatar} alt={props.name} />
//       <div className='name'>
//         {props.name}
//         <p className='status'>
//           <span className='status-online'></span>
//           {props.online ? 'online' : 'offline'}
//         </p>
//       </div>
//     </div>
//   );
// }

export default Contact;
