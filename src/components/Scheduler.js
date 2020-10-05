import React from 'react';
import TimeForm from './TimeForm';

class Scheduler extends React.Component {
  constructor() {
    super();
    this.state = {
      schedule: []
    }

    this.addSchedule = this.addSchedule.bind(this);
    this.changeSchedule = this.changeSchedule.bind(this);
  }

  changeSchedule(id, todo) {
    this.setState({
      schedule: this.state.schedule
        .map(elm => {
          if (elm.id !== id) {
            return elm;
          }
          return {
            id,
            time: elm.time,
            todo
          };
        })
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