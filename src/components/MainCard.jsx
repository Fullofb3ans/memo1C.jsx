import Card from 'react-bootstrap/Card';

export function MainCard(props) {
	// console.log(props);
	return (
		<Card style={{ width: '35rem', margin: '20px' }}>
			<Card.Header style={{ fontWeight: 'bold' }}>{props.id + 1}</Card.Header>
			<Card.Body>
				{/* <Card.Title style={{ marginRight: '3%' }}></Card.Title> */}
				<Card.Text>
					<span dangerouslySetInnerHTML={{ __html: props.text }}></span>
				</Card.Text>
				<Card.Img variant="top" src={props.img} alt="" onClick={() => props.modal(props.img)} />
			</Card.Body>
		</Card>
	);
}
