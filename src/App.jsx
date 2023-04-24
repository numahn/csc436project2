import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Container from './components/Container';

function App() {
	return (
		<>
			<Header />
			<Container>
				<Routes>
					<Route index element={<Home />}></Route>
				</Routes>
			</Container>
		</>
	);
}

export default App;
