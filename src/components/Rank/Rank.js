import React from 'react';

//Rank and count number of submissions
const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f1'>
        {name}
      </div>
      <div className='white f3'>
        {`your photo submission count is:`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;