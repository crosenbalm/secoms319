import React from 'react';
import Create from './Create';
import Delete from './Delete';
import Update from './Update';

const ChangeMenu = () => {

  return (
    <div>
        <div>
            <Create/>
        </div>
        <div>
            <Update/>
        </div>
        <div>
            <Delete/>
        </div>
    </div>
  );
};

export default ChangeMenu;
