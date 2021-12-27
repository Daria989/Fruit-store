import './Card.css';
import ButtonBuy from "../ButtonBuy/ButtonBuy";

function Card(props) {
    return (
        <div className='Card'>
            <ButtonBuy/>
            <div> {props.id}</div>
            <div className={'Card__items'}>
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
            <div>{props.image}</div>

        </div>
    )
}

export default Card;
