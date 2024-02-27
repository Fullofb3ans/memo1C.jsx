import { MainCard } from './MainCard';

export function MainCards(props) {
	// console.log(props);
	let item = props.props;
	// console.log(item);

	// let key = Object.keys(item)[0];
	// console.log(key);
	// console.log(item.key);
	return <MainCard img={item.img} text={item.text} />;
}
