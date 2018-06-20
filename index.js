import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';

const Wrapper = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
};

AppRegistry.registerComponent('app', () => Wrapper);
