import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Create from './components/Create';
import Blog from './components/Blog';
import BlogEdit from './components/BlogEdit';


function App() {
	return (
		<div className='flex flex-col h-screen justify-between'>
			<Header />
			<Routes>
				<Route index element={<Home />}></Route>
				<Route path='/create' element={<Create />}></Route>
				<Route path='/blog/:id' element={<Blog />}></Route>
				<Route path='/blog/:id/edit' element={<BlogEdit />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
