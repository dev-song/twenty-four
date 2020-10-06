import React from 'react';
import TimeForm from './TimeForm';
import TimeList from './TimeList';

class Scheduler extends React.Component {
  constructor() {
    super();
    this.state = {
      schedule: []
    }

    for (let i = 0; i < 24; i++) {
      this.state.schedule.push({ time: i, todo: null, id: null });
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

  addSchedule(startTime, endTime, content) {
    for (let i = startTime; i < endTime; i++) {
      if (this.state.schedule[i].todo || this.state.schedule[i].id) {
        alert('이미 해당 시간대에 일정이 있습니다.');
        return;
      }
    }

    this.setState({
      schedule: this.state.schedule.map(({ time, todo, id }) => {
        if (time >= startTime && time < endTime) {
          return {
            time,
            todo: content,
            id: new Date().getTime()
          }
        }
        return { time, todo, id };
      })
    })
  }

  render() {
    return (
      <div className='scheduler'>
        <TimeForm addSchedule={this.addSchedule} />
        <TimeList schedule={this.state.schedule} />
      </div>
    );
  }
}

export default Scheduler;