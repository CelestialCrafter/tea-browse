import React from 'react';
import RBFButtons from './RBFButtons';

const styles = {
	urlBar: {backgroundColor: '#f3f3f3', margin: 10, marginTop: 1, width: '100%', height: '80%', borderRadius: 5, border: 'none', outline: 'none'},
	urlBarContainer: {textAlign: 'center', flex: 1, display: 'flex'}
};

const App = () => {
	const urlBar = React.createRef();
	const back = () => {};
	const forward = () => {};
	const reload = () => {};

  return (
		<div style={{display: 'flex', flex: 1, textAlign: 'center', backgroundColor: '#ffffff', padding: 5}}>
			<RBFButtons back={back} forward={forward} reload={reload}/>
			<div style={styles.urlBarContainer}>
				<input style={styles.urlBar} ref={urlBar} />
			</div>
		</div>
  );
};

export default App;
