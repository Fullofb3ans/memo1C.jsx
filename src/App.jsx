import './App.css';
import { MainTabs } from './components/MainTabs';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import { ImgModal } from './components/ImgModal.jsx';

function App() {
	const [props, setProps] = useState([]);
	const [application, setApplication] = useState([]);

	const [imgModal, showModal] = useState(false);
	const [imgSrc, setSrc] = useState('');

	const [toSearch, setToSearch] = useState('пусто');
	const [searchResult, setSearchResult] = useState([]);

	const [activeKey, setKey] = useState('СОЗДАНИЕ ПАРТНЕРА И КОНТРАГЕНТА');

	console.log(props);

	useEffect(() => {
		fetch('http://127.0.0.1:8000/menu_plus')
			.then((res) => res.json())
			.then((data) => setProps([data]));
		fetch('http://127.0.0.1:8000/application')
			.then((res) => res.json())
			.then((data) => setApplication([data]));
	}, []);

	let closeModal = () => {
		showModal(false);
	};

	let addToSearch = (text) => {
		setToSearch(text);
	};

	let searchByText = () => {
		console.log(toSearch);
		fetch(`http://127.0.0.1:8000/search_by_text/${toSearch}`)
			.then((res) => res.json())
			.then((data) => setSearchResult(data));
		setKey('Поиск');
	};

	return (
		<>
			<Header application={application} setKey={(e) => setKey(e)} addToSearch={addToSearch} search={(text) => searchByText(text)} />
			{imgModal === true ? <ImgModal close={closeModal} img={imgSrc} /> : ''}
			<MainTabs
				application={application}
				activeKey={activeKey}
				searchResult={searchResult}
				keyp={activeKey}
				setKey={(e) => setKey(e)}
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
