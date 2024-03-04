import Tab from 'react-bootstrap/Tab';
import { MainCards } from './MainCards';

export function TabsContentForApp(props) {
	return props.props[0].map((item) => {
		let index = props.props[0].findIndex((c) => c.id === item.id);
		console.log(item);
		return (
			<Tab.Pane eventKey={item.name}>
				<MainCards props={item} modal={props.modal} index={index} />
			</Tab.Pane>
		);
	});
}
