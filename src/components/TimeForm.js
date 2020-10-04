import React from 'react';

function TimeForm() {
  return (
    <form className='time-form'>
      <input type='number' min='0' max='24' />
      <input type='number' min='0' max='24' />
      <input type='number' min='0' max='24' />
    </form>
  )
}

export default TimeForm;