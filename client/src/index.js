import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {IntlProvider} from 'react-intl';

ReactDOM.render(
	<IntlProvider locale="ko">
		<App />
	</IntlProvider>,
	document.getElementById('root'));
registerServiceWorker();
