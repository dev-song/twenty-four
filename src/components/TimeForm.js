import React from 'react';
import './TimeForm.css';



class TimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      collapse: false
    }

    this.addSchedule = props.addSchedule;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const startTime = parseInt(event.target[0].value),
      endTime = parseInt(event.target[1].value),
      todo = event.target[2].value;

    if (!this.validateInput(startTime, endTime, todo)) {
      return false;
    }
    this.addSchedule(startTime, endTime, todo);

    this.clearInputField(event);
  }

  handleExpand() {
    const TRANSITION_DELAY = this.state.expanded ? 400 : 0;

    this.setState({ collapse: this.state.expanded });
    setTimeout(() => {
      this.setState({
        expanded: !this.state.expanded
      });
    }, TRANSITION_DELAY);
  }

  validateInput(startTime, endTime, todo) {
    return (startTime < 24 && startTime > 0)
      || (endTime <= 24 && endTime > startTime)
      || todo.length <= 24;
  }

  clearInputField(event) {
    event.target.querySelectorAll('div > input').forEach((input, index) => {
      input.value = '';

      if (index === 0) {
        input.focus();
      }
    })
  }

  render() {
    const { expanded, collapse } = this.state;

    return (
      <div className='add-schedule__container'>
        <div className='add-schedule__header'>
          <h2 className='header__title'>일정 추가</h2>
          <span className='header__button-expand' role='img' aria-label='Expand' onClick={this.handleExpand}>&#128317;</span>
        </div>

        {expanded
          ?
          <form className={`add-schedule__form${collapse ? ' collapse' : ''}`} onSubmit={this.handleSubmit}>
            <div className='schedule__time-start'>
              <input type='number' min='0' max='24' placeholder='시작시간' required />
            </div>
            <div className='schedule__time-end'>
              <input type='number' min='0' max='24' placeholder='종료시간' required />
            </div>
            <div className='schedule__todo'>
              <input type='text' min='0' max='24' placeholder='내용' required />
            </div>
            <input type='submit' value='&#10133;' />
          </form>
          : null
        }
      </div>
    );
  }
}

export default TimeForm;