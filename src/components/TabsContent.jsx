import Tab from 'react-bootstrap/Tab';
import { MainCards } from './MainCards';

export function TabsContent(props) {
	return props.props.map((item) => {
		const itemKey = Object.keys(item)[0];
		const itemProps = Object.values(item)[0];
		return itemProps.map((i) => {
			return (
				<Tab.Pane eventKey={itemKey}>
					<MainCards props={i} />
				</Tab.Pane>
			);
		});
	});
}
