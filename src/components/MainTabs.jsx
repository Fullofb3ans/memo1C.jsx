import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { TabsLeftCol } from './TabsLeftCol';
import { TabsContent } from './TabsContent';

export function MainTabs(props) {
	return (
		<div style={{ padding: '1%' }}>
			<Tab.Container id="controlled-tab-example" activeKey={props.keyp} onSelect={(k) => props.setKey(k)} className="mb-3">
				<Row>
					<Col sm={2}>
						<TabsLeftCol props={props.props} />
					</Col>

					<Col sm={10}>
						<h2>{props.keyp}</h2>
						<Tab.Content style={{ display: 'flex', flexWrap: 'wrap' }}>
							<TabsContent application={props.application} activeKey={props.activeKey} searchResult={props.searchResult} props={props.props} modal={props.modal} />
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
}
