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
	// return (
	// 	<Stack direction="horizontal" gap={3}>
	// 		{/* {Array.from({ length: 4 }).map((_, idx) => ( */}

	// 		<div className="p-2">
	// 			<Card>
	// 				<Card.Img variant="top" src={props.img} />
	// 				<Card.Body>
	// 					<Card.Title>Card title</Card.Title>
	// 					<Card.Text>
	// 						<span dangerouslySetInnerHTML={{ __html: props.text }}></span>
	// 					</Card.Text>
	// 				</Card.Body>
	// 			</Card>
	// 		</div>
	// 	</Stack>
	// );
}
