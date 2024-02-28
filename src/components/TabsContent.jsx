import Tab from 'react-bootstrap/Tab';
import { MainCards } from './MainCards';

export function TabsContent(props) {
	console.log(props);
	return props.props.map((item) => {
		const itemProps = Object.values(item);
		return itemProps.map((i) => {
			return i.map((item) => {
				let index = i.findIndex((c) => c.id === item.id);
				return (
					<Tab.Pane eventKey={item.name}>
						<MainCards props={item} index={index} modal={props.modal} />
					</Tab.Pane>
				);
			});
		});
	});
}
