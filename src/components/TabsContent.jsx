import Tab from 'react-bootstrap/Tab';
import { MainCards } from './MainCards';

export function TabsContent(props) {
	console.log(props);
	console.log(props.application);
	let b = props.application;

	// if (b.length !== 0) {
	// 	return props.application[0].map((item) => {
	// 		return (
	// 			<Tab.Pane eventKey={item.name}>
	// 				<MainCards application={item} modal={props.modal} />
	// 			</Tab.Pane>
	// 		);
	// 	});
	// }

	if (props.searchResult !== 'пусто' && props.activeKey == 'Поиск') {
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
