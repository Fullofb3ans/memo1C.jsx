import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { TabsLeftCol } from './TabsLeftCol';
import { TabsContent } from './TabsContent';

export function MainTabs(props) {
	console.log(props);
	return (
		<div style={{ padding: '1%' }}>
			<Tab.Container id="left-tabs-example" defaultActiveKey="СОЗДАНИЕ ПАРТНЕРА И КОНТРАГЕНТА">
				<Row>
					<Col sm={2}>
						<TabsLeftCol props={props.props} />
					</Col>

					<Col sm={10}>
						<Tab.Content style={{ display: 'flex', flexWrap: 'wrap' }}>
							<TabsContent props={props.props} modal={props.modal} />
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
}
