import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchBar } from './SearchBar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { DropdownAddit } from './DropdownAddit';

export function Header(props) {
	// console.log(props);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<h4 className="nav-link" style={{ fontSize: '16px', fontWeight: 'bold' }}>
					Инструкция по работе в 1С
				</h4>
				<a className="navbar-brand" href="./">
					<img src="/favicon.ico" alt="ЭМК" style={{ height: '50px' }} />
				</a>
				<NavDropdown title="Приложения" id="nav-dropdown">
					<DropdownAddit setKey={props.setKey} application={props.application} />
				</NavDropdown>

				<SearchBar enter={props.enter} setKey={props.setKey} addToSearch={props.addToSearch} search={props.search} />
			</div>
		</nav>
	);
}
