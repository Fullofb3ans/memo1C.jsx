import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function DropdownAddit(props) {
	// console.log(props.application);
	return props.application[0].map((item) => {
		// console.log(item.id);
		return <NavDropdown.Item onClick={() => props.setKey(item.name)}>{item.name}</NavDropdown.Item>;
	});
}
