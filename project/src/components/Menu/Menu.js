import './Menu.css';
import basketImg from '../../images/basket.png';
import {Link} from "react-router-dom";
import catalog from "../Catalog/Catalog";
import {useSelector} from "react-redux/lib/hooks/useSelector";


function Menu() {
    const count = useSelector((state) => state.counter.value);
    return (
        <div className={'header__links'}>
            <Link to={'catalog'} className={'header__link-catalog'}>Каталог</Link>
            <Link to={'basket'} className={'header__link-basket'}><img src={basketImg} alt='basket'/></Link>
            <div className={'basket__counter'}>{count}</div>
        </div>
    );
}

export default Menu;