import React from 'react';
import Container from './Container';
import { NavLink as RouterLink } from 'react-router-dom';

export default function Header() {
	return (
		<Container className="bg--300">
			<nav className="flex gap-4">
				<RouterLink className="test" to="/">
					Home
				</RouterLink>
			</nav>
		</Container>
	);
}
