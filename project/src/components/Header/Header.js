import './Header.css';
import Menu from '../Menu/Menu';
import logo from '../../images/logo.png';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <Link to={'/'} className={'header__link'}><img className='header__logo' src={logo} alt={'logo'}/></Link>
                <Menu/>
            </div>
        </header>
    );
}

export default Header;