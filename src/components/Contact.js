import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      'online': this.props.online,
    };
  }

  render() {
    return (
      <div className="Contact">
          <img className="avatar" src={this.props.avatar} alt={this.props.name} />
          <div>   
              <div className="name">{this.props.name}</div>
              <div className="status"
                   onClick={event=>{
                      this.setState({online:!this.state.online})
                    }}
              >
                  <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                  <div className="status-text">{this.state.online ? 'Online' : 'Offline'}</div>
              </div>
          </div>
      </div>
    );
  }
}

export default Contact;
