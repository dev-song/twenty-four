import React from 'react';
import './TimeForm.css';

function validateSchedule(startTime, endTime, todo) {
  const isInputValid =
    (startTime < 24 && startTime > 0)
    || (endTime <= 24 && endTime > startTime)
    || todo.length <= 24;

  if (!isInputValid) {
    return false;
  }
  return true;
}

function TimeForm({ addSchedule }) {
  function handleSubmit(event) {
    event.preventDefault();

    const startTime = parseInt(event.target[0].value),
      endTime = parseInt(event.target[1].value),
      todo = event.target[2].value;

    if (!validateSchedule(startTime, endTime, todo)) {
      return false;
    }
    addSchedule(startTime, endTime, todo);
  }

  return (
    <div className='schedule-add'>
      <div className='add-schedule__header'>
        <h2 className='header__title'>일정 추가</h2>
        <span className='header__button-expand' role='img' aria-label='Expand'>&#128317;</span>
      </div>
      <form className='add-schedule__form' onSubmit={handleSubmit}>
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
    </div>
  );
}

export default TimeForm;