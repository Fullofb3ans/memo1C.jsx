import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { TabsLeftCol } from './TabsLeftCol';
import { TabsContent } from './TabsContent';
import { TabsContentForApp } from './TabsContentForApp';

export function MainTabs(props) {
	return (
		<div style={{ padding: '1%' }}>
			<Tab.Container id="controlled-tab-example" activeKey={props.keyp} onSelect={(k) => props.setKey(k)} className="mb-3">
				<Row>
					<Col sm={3}>
						<TabsLeftCol props={props.props} />
					</Col>

					<Col sm={9}>
						<h2 style={{ paddingLeft: '2%' }}>{props.keyp}</h2>
						<Tab.Content style={{ display: 'flex', flexWrap: 'noWrap', paddingLeft: '2%', flexDirection: 'column' }}>
							<TabsContent activeKey={props.activeKey} searchResult={props.searchResult} props={props.props} modal={props.modal} />
						</Tab.Content>

						<Tab.Content style={{ display: 'flex', flexWrap: 'noWrap', paddingLeft: '2%', flexDirection: 'column' }}>
							{props.application.length !== 0 ? <TabsContentForApp props={props.application} activeKey={props.activeKey} modal={props.modal} /> : console.log(props.application + 'ПУСТО')}
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
}
