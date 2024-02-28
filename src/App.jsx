import './App.css';
import { MainTabs } from './components/MainTabs';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import { ImgModal } from './components/ImgModal.jsx';

function App() {
	const [props, setProps] = useState([]);
	const [imgModal, showModal] = useState(false);
	const [imgSrc, setSrc] = useState('');

	useEffect(() => {
		fetch('http://127.0.0.1:8000/menu_plus')
			.then((res) => res.json())
			.then((data) => setProps([data]));
	}, []);

	let closeModal = () => {
		showModal(false);
	};

	return (
		<>
			<Header />

			{imgModal === true ? <ImgModal close={closeModal} img={imgSrc} /> : ''}
			<MainTabs
				props={props}
				modal={(e) => {
					showModal(true);
					setSrc(e);
				}}
			/>
		</>
	);
}

export default App;
