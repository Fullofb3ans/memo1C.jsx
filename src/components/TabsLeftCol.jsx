import Nav from 'react-bootstrap/Nav';

export function TabsLeftCol(props) {
	// console.log(props);
	return props.props.map((item) => {
		return Object.keys(item).map((i) => {
			let key = Object.keys(item).indexOf(i);
			return (
				<Nav key={key} variant="tabs" className="flex-column">
					<Nav.Item key={item.id} style={{ paddingBottom: '1%' }}>
						<Nav.Link eventKey={i}>{i}</Nav.Link>
					</Nav.Item>
				</Nav>
			);
		});
	});
}
