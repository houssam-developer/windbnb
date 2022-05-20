import logo from '../assets/logo.svg'
import './Header.scss';
import SearchMenu from './SearchMenu';


function Header() {
	return (
		<header className="header">
			<img src={logo} className="header__logo" alt="logo" />
			<SearchMenu />
		</header>
	)
}

export default Header