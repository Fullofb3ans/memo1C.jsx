import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchBar } from './SearchBar';
import { DropdownAddit } from './DropdownAddit';

export function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand" href="./">
					<img src="/favicon.ico" alt="ЭМК" style={{ height: '50px' }} />
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<DropdownAddit />
				<SearchBar />
			</div>
		</nav>
	);
}
