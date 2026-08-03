import React, { useContext } from 'react';
import UserContext from './Context/UserContext';

const GrandParent = () => {
  const {userName, array} = useContext(UserContext);

  return (
    <div>
    {userName}
    {array}
    </div>
  );
}

export default GrandParent;
