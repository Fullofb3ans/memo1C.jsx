import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function DropdownAddit() {
	return (
		<NavDropdown title="Приложения" id="nav-dropdown">
			<NavDropdown.Item eventKey="4.1">Сокращения</NavDropdown.Item>
			<NavDropdown.Item eventKey="4.1">ПЕРЕЧЕНЬ КРИТИЧНЫХ ДЕЙСТВИЙ-ПРАВИЛ</NavDropdown.Item>
			<NavDropdown.Item eventKey="4.2">ПРИЛОЖЕНИЕ 2.СРОКИ ПРЕДОСТАВЛЕНИЯ ПЕРВИЧНЫХ ДОКУМЕНТОВ В БУХГАЛТЕРИЮ (Отгрузка с ОП ООО "УЛТ")</NavDropdown.Item>
			<NavDropdown.Item eventKey="4.3">ПРИЛОЖЕНИЕ 2.1 (Отгрузка транзитом (с КСА, Регулятора, ОП САЗ, от сторонних поставщиков) )</NavDropdown.Item>
			<NavDropdown.Item eventKey="4.4">ПРИЛОЖЕНИЕ 2.2 (Отгрузка Обособленными подразделениями от ООО ТД "Энергомашкомплект" с ОП ООО "УЛТ" )</NavDropdown.Item>
			<NavDropdown.Item eventKey="4.4">ПРИЛОЖЕНИЕ 2.3 (Отгрузка Обособленными подразделениями от ООО ТД "Энергомашкомплект" транзитом с Обособленного подразделения )</NavDropdown.Item>
			<NavDropdown.Item eventKey="4.4">ПРИЛОЖЕНИЕ 2.4 (Приходные документы: )</NavDropdown.Item>
			<NavDropdown.Item eventKey="4.4">ПРИЛОЖЕНИЕ 2.5 (Авансовые счета-фактуры )</NavDropdown.Item>
			<NavDropdown.Item eventKey="4.4">ПРИЛОЖЕНИЕ 2.6 (Претензии, взаимозачеты, соглашения об уступке прав требования, соглашение о замене сторон контракта)</NavDropdown.Item>
			<NavDropdown.Item eventKey="4.4">ПРИЛОЖЕНИЕ 2.7 (Акты сверок )</NavDropdown.Item>
			<NavDropdown.Item eventKey="4.4">ПРИЛОЖЕНИЕ 2.8 (Посадочные талоны )</NavDropdown.Item>
			<NavDropdown.Item eventKey="4.4">ПРИЛОЖЕНИЕ 2.9 ( Договора с поставщиками )</NavDropdown.Item>
			<NavDropdown.Item eventKey="4.4">ПРИЛОЖЕНИЕ 3. ОБРАЗЦЫ ОФОРМЛЕНИЯ ТТН</NavDropdown.Item>
		</NavDropdown>
	);
}
