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
      let todo = null,
        id = null;

      // dummy data
      if (i < 24) { todo = 'Night'; id = 5; }
      if (i < 21) { todo = 'Evening'; id = 4; }
      if (i < 18) { todo = 'Afternoon'; id = 3; }
      if (i < 12) { todo = 'Morning'; id = 2; }
      if (i < 7) { todo = 'Sleep'; id = 1; }
      // END of dummy data

      this.state.schedule.push({ time: i, todo, id });
    }

    this.addSchedule = this.addSchedule.bind(this);
    this.deleteSchedule = this.deleteSchedule.bind(this);
  }

  addSchedule(startTime, endTime, content) {
    if (!this.checkSchedule(startTime, endTime)) {
      return;
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

  deleteSchedule(scheduleId) {
    this.setState({
      schedule: this.state.schedule.map(({ time, todo, id }) => {
        if (id === scheduleId) {
          return {
            time,
            todo: null,
            id: null
          }
        }
        return { time, todo, id };
      })
    })
  }

  checkSchedule(startTime, endTime) {
    for (let i = startTime; i < endTime; i++) {
      if (this.state.schedule[i].todo || this.state.schedule[i].id) {
        alert('이미 해당 시간대에 일정이 있습니다.');
        return false;
      }
    }

    return true;
  }

  render() {
    return (
      <div className='scheduler'>
        <TimeForm addSchedule={this.addSchedule} />
        <TimeList
          schedule={this.state.schedule}
          deleteSchedule={this.deleteSchedule}
        />
      </div>
    );
  }
}

export default Scheduler;