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
    return (
      <div class="panels">
        <Panel para={this.panels[0]} num={1} />
        <Panel para={this.panels[1]} num={2} />
        <Panel para={this.panels[2]} num={3} />
        <Panel para={this.panels[3]} num={4} />
        <Panel para={this.panels[4]} num={5} />
      </div>
    );
  }
};

class Panel extends Component {
  render() {
    const panelClass = `panel panel${this.props.num}`;
    return (
      <div class={panelClass}>
        <p>{this.props.para[0]}</p>
        <p>{this.props.para[1]}</p>
        <p>{this.props.para[2]}</p>
      </div>
    );
  }
}