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
      <div class="panels">
        {panels.map( (e, i) => <Panel para={e} num={i+1} />)}
      </div>
    );
  }
};

class Panel extends Component {
  render() {
    const panelClass = `panel panel${this.props.num}`;
    const words = this.props.para;
    return (
      <div class={panelClass}>
        {words.map( e => <p>{e}</p>)}
      </div>
    );
  }
}