import Tab from 'react-bootstrap/Tab';
import { MainCards } from './MainCards';

export function TabsContentForApp(props) {
	return props.props[0].map((item) => {
		let index = props.props[0].findIndex((c) => c.id === item.id);
		let search = false;
		// console.log(item);
		return (
			<Tab.Pane eventKey={item.name}>
				<MainCards part={props.name} search={search} props={item} modal={props.modal} index={index} />
			</Tab.Pane>
		);
	});
}