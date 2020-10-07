import React from 'react';

function TimeList({ schedule, deleteSchedule }) {
  let startTime,
    endTime,
    content;
  const newSchedule = [];
  schedule.forEach(({ time, todo, id }, index, arr) => {
    if (todo) {
      if (!startTime && startTime !== 0) {
        startTime = time;
        content = todo;
      }
      if (!arr[index + 1] || todo !== arr[index + 1].todo) {
        endTime = time + 1;
        newSchedule.push({
          startTime,
          endTime,
          content,
          id
        });
        startTime = undefined;
        endTime = undefined;
        content = undefined;
      }
    }
  });

  return (
    <div className='time-list'>
      <div className='time-list__legends'>
        <span className='legends__start-time'>시작 시간</span>
        <span className='legends__end-time'>종료 시간</span>
        <span className='legends__todo'>내용</span>
      </div>

      {newSchedule.map(({ startTime, endTime, content, id }, index) => (
        <div key={index} className='time-list__item'>
          <span className='item__start-time'>{startTime < 10 ? `0${startTime}` : startTime}</span>
          <span className='item__end-time'>{endTime < 10 ? `0${endTime}` : endTime}</span>
          <span className='item__todo'>{content}</span>
          <span
            className='item__button-delete'
            role='img'
            aria-label='Delete'
            onClick={() => { deleteSchedule(id) }}
          >&#10060;</span>
        </div>
      ))}
    </div>
  );
}

export default TimeList;