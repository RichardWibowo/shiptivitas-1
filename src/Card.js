import React from 'react';
import './Card.css';
import Dragula from 'dragula'

export default class Card extends React.Component {
  render() {
    let className = ['Card'];
    if (this.props.status === 'backlog') {
      className.push('Card-grey');
    } else if (this.props.status === 'in-progress') {
      className.push('Card-blue');
    } else if (this.props.status === 'complete') {
      className.push('Card-green');
    }
    return (
      <dragula>
      <div className={className.join(' ')} data-id={this.props.id} data-status={this.props.status}>
        <div className="Card-title">{this.props.name}</div>
      </div>
      </dragula>
    );
  }
}