import React from 'react';

function TimeForm({ addSchedule }) {
  function handleSubmit(event) {
    const startTime = event.target[0].value,
      endTime = event.target[1].value,
      todo = event.target[2].value;
    event.preventDefault();

    addSchedule(startTime, endTime, todo);
  }

  return (
    <form className='time-form' onSubmit={handleSubmit}>
      <div className='time-start'>
        <label>시작시간</label>
        <input type='number' min='0' max='24' placeholder='시작시간' required />
      </div>
      <div className='time-end'>
        <label>종료시간</label>
        <input type='number' min='0' max='24' placeholder='종료시간' required />
      </div>
      <div className='todo'>
        <label>내용</label>
        <input type='text' min='0' max='24' placeholder='내용' required />
      </div>
      <input type='submit' value='추가' />
    </form>
  )
}

export default TimeForm;