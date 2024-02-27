import Nav from 'react-bootstrap/Nav';

export function TabsLeftCol(props) {
	console.log(props.props);
	return Object.keys(props.props).map((item) => {
		// console.log(item);
		return (
			<Nav variant="tabs" className="flex-column">
				<Nav.Item style={{ paddingBottom: '1%' }}>
					<Nav.Link eventKey={item}>{item}</Nav.Link>
				</Nav.Item>
			</Nav>
		);
	});
}
