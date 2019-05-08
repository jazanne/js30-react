import React, { Component } from 'react';
import './style.css';

export class FlexPanelGallery extends Component {
  constructor(props) {
    super(props);
    this.panels = [
      ['Hey', 'Let\'s', 'Dance'],
      ['Give', 'Take', 'Receive'],
      ['Experience', 'It', 'Today'],
      ['Give', 'All', 'You can'],
      ['Life', 'In', 'Motion']
    ];
  }
  render() {
    const panels = this.panels;
    return (
      <div className="panels">
        {panels.map( (e, i) => <Panel para={e} num={i+1} key={i} />)}
      </div>
    );
  }
};

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const prevState = this.state.isOpen;
    this.setState({
      isOpen: !prevState
    });
  }

  render() {
    const panelClass = `panel panel${this.props.num} ${this.state.isOpen ? 'open open-active' : ''}`;
    const words = this.props.para;
    return (
      <div className={panelClass} onClick={this.handleClick}>
        {words.map( (e, i) => <p key={i}>{e}</p>)}
      </div>
    );
  }
}