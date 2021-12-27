import './CardList.css';
import Banana from '../../images/banana.png';
import Apple from '../../images/Apple.png';
import GreenApple from '../../images/GreenApple.png';
import Garnet from '../../images/Garnet.png';
import Orange from '../../images/orange.png';
import Watermelon from '../../images/watermelon.png';
import Avocado from '../../images/Avocado.png';
import Strawberry from '../../images/Strawberry.png';
import Card from '../Card/Card'

function CardList() {
    const productCards = [
        {
            id: '1',
            name: 'Бананы',
            price: '100 руб',
            image: <img src={Banana} alt={"banana"}/>
        },
        {
            id: '2',
            name: 'Красные яблоки',
            price: '90 руб',
            image: <img src={Apple} alt={"Apple"}/>
        },
        {
            id: '3',
            name: 'Зеленые яблоки',
            price: '90 руб',
            image: <img src={GreenApple} alt={"GreenApple"}/>
        },
        {
            id: '4',
            name: 'Гранат',
            price: '120 руб',
            image: <img src={Garnet} alt={"Garnet"}/>
        },
        {
            id: '5',
            name: 'Апельсин',
            price: '100 руб',
            image: <img src={Orange} alt={"Orange"}/>
        },
        {
            id: '6',
            name: 'Арбуз',
            price: '70 руб',
            image: <img src={Watermelon} alt={"Watermelon"}/>
        },
        {
            id: '7',
            name: 'Авокадо',
            price: '130 руб',
            image: <img src={Avocado} alt={"Avocado"}/>
        },
        {
            id: '8',
            name: 'Клубника',
            price: '300 руб',
            image: <img src={Strawberry} alt={"Strawberry"}/>
        }
    ];

    return (
        <div className='cardList'>
            {
                productCards.map((user) => {
                    return <Card
                            key = {user.id}
                            name={user.name}
                            price={user.price}
                            image={user.image}/>
                })
            }
        </div>
    );
}

export default CardList;