import Nav from 'react-bootstrap/Nav';

export function TabsLeftCol(props) {
	return props.props.map((item) => {
		// console.log(Object.keys(item));
		return (
			<Nav variant="tabs" className="flex-column">
				<Nav.Item style={{ paddingBottom: '1%' }}>
					<Nav.Link eventKey={Object.keys(item)}>{Object.keys(item)}</Nav.Link>
				</Nav.Item>
			</Nav>
		);
	});
}
