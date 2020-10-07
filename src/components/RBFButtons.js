import React from 'react';

import '../styles/RBFButtons.sass';
import {
	IoIosArrowBack as Back,
	IoIosArrowForward as Forward
} from 'react-icons/io';
import { MdAutorenew as Reload } from 'react-icons/md';

const RBFButtons = (props) => (
	<div>
		<button onClick={props.reload} className={'RBFButtonsIcon'}>
			<Reload />
		</button>
		<button onClick={props.back} className={'RBFButtonsIcon'}>
			<Back />
		</button>
		<button onClick={props.forward} className={'RBFButtonsIcon'}>
			<Forward />
		</button>
	</div>
);

export default RBFButtons;
