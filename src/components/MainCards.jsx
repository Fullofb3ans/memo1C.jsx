import { MainCard } from './MainCard';

export function MainCards(props) {
	// console.log(props);
	let item = props.props;
	return <MainCard setKey={props.setKey} part={item.name} search={props.search} key={props.index} img={item.img} text={item.text} id={props.index} modal={props.modal} />;
}
