import { MainCard } from './MainCard';

export function MainCards(props) {
	// console.log(props);
	let a = props.props;
	return a.map((item) => {
		console.log(item);
		return <MainCard img={item.img} text={item.text} />;
	});
}
