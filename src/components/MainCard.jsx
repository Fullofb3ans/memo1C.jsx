import Card from 'react-bootstrap/Card';

export function MainCard(props) {
	// console.log(props);
	return (
		<Card style={{ width: '50rem', marginBottom: '30px' }}>
			<Card.Img variant="top" src={props.img} alt="" />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					<div dangerouslySetInnerHTML={{ __html: props.text }}></div>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}
