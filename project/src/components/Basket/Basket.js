import './Basket.css';
import {useSelector} from "react-redux/lib/hooks/useSelector";

function Basket() {
    let basketVal = useSelector((state) => state.basket.value);
    return (
        <div className='Basket'>
            {basketVal}
        </div>
    )
}

export default Basket;