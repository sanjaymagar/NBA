import React from 'react';
import ReactDOM from 'react-dom';


// Importing Route
import Routes from './routes';

const App = () => {
	return (
		<div>
				<Routes />

		</div>
		
	)
}

ReactDOM.render(<App />, document.querySelector('#root'));
