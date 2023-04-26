import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<React.StrictMode>
			<ChakraProvider>
				<Provider store={store}>
					<App />
				</Provider>
			</ChakraProvider>
		</React.StrictMode>
	</BrowserRouter>
);
