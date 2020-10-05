import React from 'react';

function TimeList({ schedule }) {
  console.log(schedule);

  return (
    <div className='time-list'>
      <div className='time-list__legends'>
        <span className='legends__start-time'>시작 시간</span>
        <span className='legends__end-time'>종료 시간</span>
        <span className='legends__todo'>내용</span>
      </div>

      {schedule.map(({ startTime, endTime, todo }, index) => (
        <div key={index} className='time-list__item'>
          <span className='item__start-time'>{startTime}</span>
          <span className='item__end-time'>{endTime}</span>
          <span className='item__todo'>{todo}</span>
        </div>
      ))}
    </div>
  );
}

export default TimeList;