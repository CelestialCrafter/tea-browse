import React from 'react';

import Drag from './icons/Drag';
import Close from './icons/Close';
import Minimize from './icons/Minimize';
import Maximize from './icons/Maximize';

const WindowButtons = () => {
  return (
		<div style={{margin: 5, right: 0, top: 0, position: 'absolute', display: 'flex'}}>
			<Drag />
			<Close />
			<Minimize />
			<Maximize />
		</div>
  );
};

export default WindowButtons;
