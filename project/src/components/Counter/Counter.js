import './Counter.css';
import {increment} from "../../app/reducers/counter";
import {addCard} from "../../app/reducers/basket";
import { useDispatch } from 'react-redux/lib/hooks/useDispatch';

function Counter() {
     const dispatch = useDispatch();

    function bask() {
        dispatch(increment());
        dispatch(addCard() )
    }

    return (
        <div className='Counter'>
            <button className='Counter__button' onClick={() => bask()}>В корзину</button>
        </div>
    )
}
export default Counter;