import React from 'react';

const Chidren = (props) => {
  return (
    <div className='myclass'>
      <h1>About</h1>
      {props.children }
    </div>
  );
}

export default Chidren;
