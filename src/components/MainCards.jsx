import { MainCard } from './MainCard';

export function MainCards(props) {
	let item = props.props;
	return <MainCard key={props.index} img={item.img} text={item.text} id={props.index} modal={props.modal} />;
}
