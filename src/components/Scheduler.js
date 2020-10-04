import React from 'react';

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

    this.changeSchedule = this.changeSchedule.bind(this);
  }

  changeSchedule(time, todo) {
    this.setState({
      schedule: this.state.schedule
        .map(elm => elm.time === time ? { time, todo } : elm)
    })
  }

  render() {
    console.log(this.state.schedule);

    return (
      <div />
    )
  }
}

export default Scheduler;