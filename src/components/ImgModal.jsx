import Modal from 'react-bootstrap/Modal';

export function ImgModal(props) {
	console.log(props);
	return (
		<div className="modal show" style={{ display: 'block', position: 'fixed', backgroundColor: '#000000b8' }}>
			<Modal.Dialog size="xl">
				<Modal.Header closeButton onClick={props.close}></Modal.Header>

				<Modal.Body>
					<img onClick={props.close} style={{ width: '100%' }} src={props.img} alt="" />
				</Modal.Body>
			</Modal.Dialog>
		</div>
	);
}
