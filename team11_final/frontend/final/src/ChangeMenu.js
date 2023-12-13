// Import necessary React modules
import React, { useState, useEffect } from 'react';
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
