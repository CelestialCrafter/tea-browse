import React from 'react';

import Reload from './icons/Reload';
import Back from './icons/Back';
import Forward from './icons/Forward';

const RBFButtons = props => {
  return (
    <div>
			<button onClick={props.reload()} style={{border: 'none', backgroundColor: 'inherit'}}><Reload /></button>
			<button onClick={props.back()} style={{border: 'none', backgroundColor: 'inherit'}}><Back /></button>
			<button onClick={props.forward()} style={{border: 'none', backgroundColor: 'inherit'}}><Forward /></button>
		</div>
  );
};

export default RBFButtons;
