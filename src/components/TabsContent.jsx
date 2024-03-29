import Tab from 'react-bootstrap/Tab';
import { MainCards } from './MainCards';

export function TabsContent(props) {
	if (props.searchResult !== 'пуст' && props.activeKey === 'Поиск') {
		if (props.searchResult.detail === 'Not Found' || props.searchResult.length === 0) {
			return <h4 style={{ padding: '1%' }}>По запросу ничего не найдено</h4>;
		} else
			return props.searchResult.map((item) => {
				let search = true;
				// console.log(item);
				let index = props.searchResult.findIndex((c) => c.id === item.id);
				return (
					<Tab.Pane key={item.id} eventKey={'Поиск'}>
						<MainCards key={item.id} setKey={props.setKey} part={item.name} search={search} props={item} index={index} modal={props.modal} />
					</Tab.Pane>
				);
			});
	}

	return props.props.map((item) => {
		const itemProps = Object.values(item);
		return itemProps.map((i) => {
			return i.map((item) => {
				if (item.name !== 'Поиск') {
					let index = i.findIndex((c) => c.id === item.id);
					let search = false;
					return (
						<Tab.Pane key={item.id} eventKey={item.name}>
							<MainCards key={item.id} part={item.name} search={search} props={item} index={index} modal={props.modal} />
						</Tab.Pane>
					);
				}
				return null;
			});
		});
	});
}
