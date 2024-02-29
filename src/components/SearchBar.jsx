import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export function SearchBar(props) {
	// console.log(props);
	return (
		<Container className="mt" style={{ margin: 'none' }}>
			<Row>
				<Col sm={12}>
					<Form className="d-flex">
						<Form.Control type="search" placeholder="Поиск" className="me-2 rounded-pill" aria-label="Search" onKeyUp={(e) => props.addToSearch(e.target.value)} />
						<Button
							onClick={() => {
								props.search();
							}}
							className="rounded-pill"
							variant="outline-primary">
							Поиск
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}
