import Tab from 'react-bootstrap/Tab';
import { MainCards } from './MainCards';

export function TabsContent(props) {
	if (props.searchResult !== 'пуст' && props.activeKey == 'Поиск') {
		return props.searchResult.map((item) => {
			console.log(item);
			let index = props.searchResult.findIndex((c) => c.id === item.id);
			return (
				<Tab.Pane eventKey={'Поиск'}>
					<MainCards props={item} index={index} modal={props.modal} />
				</Tab.Pane>
			);
		});
	}

	return props.props.map((item) => {
		const itemProps = Object.values(item);
		return itemProps.map((i) => {
			return i.map((item) => {
				// console.log(item);
				if (item.name !== 'Поиск') {
					let index = i.findIndex((c) => c.id === item.id);
					return (
						<Tab.Pane eventKey={item.name}>
							<MainCards props={item} index={index} modal={props.modal} />
						</Tab.Pane>
					);
				}
			});
		});
	});
}
