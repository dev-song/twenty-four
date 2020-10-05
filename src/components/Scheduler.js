import React from 'react';
import TimeForm from './TimeForm';

class Scheduler extends React.Component {
  constructor() {
    super();
    this.state = {
      schedule: []
    }

    for (let i = 0; i < 24; i++) {
      const obj = { time: i, todo: '' };
      this.state.schedule.push(obj);
    }

    this.addSchedule = this.addSchedule.bind(this);
    this.changeSchedule = this.changeSchedule.bind(this);
  }

  changeSchedule(time, todo) {
    this.setState({
      schedule: this.state.schedule
        .map(elm => elm.time === time ? { time, todo } : elm)
    })
  }

  addSchedule(startTime, endTime, todo) {
    const newSchedule = {
      id: new Date().getTime(),
      startTime,
      endTime,
      todo
    };
    this.setState({ schedule: [newSchedule, ...this.state.schedule] });
  }

  render() {
    console.log(this.state.schedule);

    return (
      <TimeForm addSchedule={this.addSchedule} />
    )
  }
}

export default Scheduler;