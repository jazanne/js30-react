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
      isHovered: false
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(e) {
    this.setState({
      isHovered: e.type === 'mouseenter'
    });
  }

  render() {
    const panelClass = `panel panel${this.props.num} ${this.state.isHovered ? 'open-active open' : ''}`;
    const words = this.props.para;
    return (
      <div className={panelClass} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        {words.map( (e, i) => <p key={i}>{e}</p>)}
      </div>
    );
  }
}