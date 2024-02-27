import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export function SearchBar() {
	return (
		<Container className="mt" style={{ margin: 'none' }}>
			<Row>
				<Col sm={12}>
					<Form className="d-flex">
						<Form.Control type="search" placeholder="Поиск" className="me-2 rounded-pill" aria-label="Search" />
						<Button className="rounded-pill" variant="outline-primary">
							Поиск
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}
