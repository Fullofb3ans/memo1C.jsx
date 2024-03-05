import Card from 'react-bootstrap/Card';

export function MainCard(props) {
	// console.log(props.part);
	return (
		<Card style={{ boxShadow: '0 3px 20px rgb(0 30 69 / 11%)', borderRadius: '16px' }}>
			<Card.Header style={{ fontWeight: 'bold' }}>{props.id + 1}</Card.Header>
			<Card.Body>
				{props.search === true ? (
					<Card.Title style={{ marginRight: '3%' }}>
						<div className="searchTittle" onClick={() => props.setKey(props.part)}>
							{props.part}
						</div>
					</Card.Title>
				) : null}
				<Card.Text>
					<span dangerouslySetInnerHTML={{ __html: props.text }}></span>
				</Card.Text>
				<Card.Img variant="top" src={props.img} alt="" onClick={() => props.modal(props.img)} />
			</Card.Body>
		</Card>
	);
}
