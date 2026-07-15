import React from 'react';

const LiftingStateUp = () => {
    let name ="khushi";
    console.log(value);
    const dt= value.liftclick;
  return (
    <div>
      LiftingStateUp Child component
      <button onClick={() => dt(name)}>Send Data</button>
    </div>
  );
}

export default LiftingStateUp;
