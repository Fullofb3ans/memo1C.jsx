import Tab from 'react-bootstrap/Tab';
import { MainCards } from './MainCards';

export function TabsContent(props) {
	console.log(props.props);
	return props.map((item) => {
		console.log(item);
		return (
			<Tab.Pane eventKey={item}>
				<MainCards props={props.props.props.cuts} />
			</Tab.Pane>
		);
	});
}
