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
      isOpen: false,
      hasTransitioned: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTransition = this.handleTransition.bind(this);
  }

  handleClick(e) {
    const prevState = this.state.isOpen;
    this.setState({
      isOpen: !prevState
    });
  }

  handleTransition(e) {
    if (!e.propertyName.includes('flex')) {
      return;
    }
    const prevState = this.state.hasTransitioned;
    this.setState({
      hasTransitioned: !prevState
    });
  }

  toggleOpenClass(classList) {
    return this.toggleClass(classList, this.state.isOpen, 'open');
  }

  toggleOpenActiveClass(classList) {
    return this.toggleClass(classList, this.state.hasTransitioned, 'open-active');
  }

  toggleClass(classList, condition, className) {
    if (condition) {
      classList.push(className);
    } else {
      classList.splice(classList.indexOf(className), 0);
    }
    return classList;
  }

  render() {
    let classList = ['panel', `panel${this.props.num}`];
    classList = this.toggleOpenClass(classList);
    classList = this.toggleOpenActiveClass(classList);

    const words = this.props.para;
    return (
      <div className={classList.join(' ')}
        onClick={this.handleClick}
        onTransitionEnd={this.handleTransition}
      >
        {words.map( (e, i) => <p key={i}>{e}</p>)}
      </div>
    );
  }
}