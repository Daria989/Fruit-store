import './Footer.css';
import vk from '../../images/vk.png';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__contacts'>
                    <h2>Контакты</h2>
                    <p>Россия, 123456, г. Москва, ул. Виноградная, 1, +7 495 123 45 67</p>
                </div>
                <div className='footer__socialNetwork'>
                    <a href="https://vk.com/"><img src={vk} alt="vk"/></a>
                    <a href="https://facebook.com/"><img src={facebook} alt="facebook"/></a>
                    <a href="https://twitter.com/"><img src={twitter} alt="Пример"/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;