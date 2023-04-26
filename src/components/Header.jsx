import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

	const [currentPage, setCurrentPage] = useState('Home')

	return (
		<div className="h-16 bg-slate-900">
			<nav className="h-full px-8 flex gap-6 items-center content-center justify-items-center">
				<Link 
				className="text-orange-300 text-xl hover:text-orange-100" 
				to="/"
				onClick={() => setCurrentPage('Home')}>
					<div className={currentPage === 'Home' ? 'font-bold' : ''}>
						Home
					</div>
				</Link>

				<Link 
				className="text-orange-300 text-xl hover:text-orange-100" 
				to="create"
				onClick={() => setCurrentPage('Create')}>
					<div className={currentPage === 'Create' ? 'font-bold' : ''}>
						Create
					</div>
				</Link>
			</nav>
		</div>
	);
}

export default Header;