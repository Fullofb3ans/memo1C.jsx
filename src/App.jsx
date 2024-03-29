import './App.css';
import { MainTabs } from './components/MainTabs';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import { ImgModal } from './components/ImgModal.jsx';
import { Loader } from './components/Loader.jsx';

function App() {
	const [props, setProps] = useState([]);
	const [application, setApplication] = useState([]);

	const [imgModal, showModal] = useState(false);
	const [imgSrc, setSrc] = useState('');

	const [toSearch, setToSearch] = useState('пусто');
	const [searchResult, setSearchResult] = useState([]);

	const [activeKey, setKey] = useState('СОЗДАНИЕ ПАРТНЕРА И КОНТРАГЕНТА');

	const [isLoading, setLoading] = useState(true);

	const link = '//1c-help.websto.pro';

	// console.log(props);
	// useEffect(() => {
	// 	console.log(isLoading);
	// }, [isLoading]);

	useEffect(() => {
		setLoading(true);
		fetch(`${link}/menu_plus`)
			.then((res) => res.json())
			.then((data) => {
				setProps([data]);
				setLoading(false);
			});

		fetch(`${link}/application`)
			.then((res) => res.json())
			.then((data) => setApplication([data]));
	}, []);

	let closeModal = () => {
		showModal(false);
	};

	let addToSearch = (text) => {
		setToSearch(text);
	};

	let handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			searchByText();
		}
	};

	let HandleKey = (e) => {
		setKey(e);
		document.querySelector('#headUp').scrollIntoView({ behavior: 'smooth' });
	};

	let searchByText = () => {
		setLoading(true);
		console.log(isLoading);
		fetch(`${link}/search_by_text/${toSearch}`)
			.then((res) => res.json())
			.then((data) => {
				setSearchResult(data);
				setKey('Поиск');
				setLoading(false);
			});
	};

	return (
		<>
			<Header enter={handleKeyPress} application={application} setKey={(e) => HandleKey(e)} addToSearch={addToSearch} search={(text) => searchByText(text)} />
			{imgModal === true ? <ImgModal close={closeModal} img={imgSrc} /> : ''}
			{isLoading === true ? (
				<Loader />
			) : (
				<MainTabs
					application={application}
					activeKey={activeKey}
					searchResult={searchResult}
					keyp={activeKey}
					setKey={(e) => HandleKey(e)}
					props={props}
					modal={(e) => {
						showModal(true);
						setSrc(e);
					}}
				/>
			)}
		</>
	);
}

export default App;
