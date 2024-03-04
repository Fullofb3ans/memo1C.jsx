import NavDropdown from 'react-bootstrap/NavDropdown';

export function DropdownAddit(props) {
	return props.application[0].map((item) => {
		return <NavDropdown.Item onClick={() => props.setKey(item.name)}>{item.name}</NavDropdown.Item>;
	});
}
