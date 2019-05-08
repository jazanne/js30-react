import React, { Component } from 'react';
import './style.css';

const MAX_DEG = 360;
const SECOND = 1000;
export class ClockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.setClock = this.setClock.bind(this);
  }

  componentDidMount() {
    document.querySelector("html").classList = "Clock";
    this.tickTimer = setInterval(this.setClock, SECOND);
  }

  componentWillUnmount() {
    clearInterval(this.tickTimer);
  }

  setClock() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <Clock time={this.state.time} />
    );
  }
}

const Clock = (props) => {
  const time = props.time;
  return (
    <div className="clock">
      <div className="clock-face">
        <HandContainer type='hour' maxPerRotation={12} time={time.getHours()} />
        <HandContainer type='min' maxPerRotation={60} time={time.getMinutes()} />
        <HandContainer type='second' maxPerRotation={60} time={time.getSeconds()} />
      </div>
    </div>
  );
}

class HandContainer extends Component {
  getDeg(time, maxPerRotation){
    const OFFSET = 90;
    const deg = (( time / maxPerRotation ) * MAX_DEG ) + OFFSET;
    return deg;
  }

  render() {
    const deg = this.getDeg(this.props.time, this.props.maxPerRotation);
    return (
      <Hand type={this.props.type} rotateDeg={deg} />
    );
  }
}

const Hand = (props) => {
  const className = `hand ${props.type}-hand`;
  const styles = {
    transform: `rotate( ${props.rotateDeg}deg )`
  };
  return (
    <div className={className} style={styles}></div>
  );
}