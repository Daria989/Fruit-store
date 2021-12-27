import './Main.css';
import mainImagePlate from '../../images/plate.png';

function Main() {
    return (
        <main className='main'>
            <div className='main__container'>
                <h1 className='main__title'><span>Organic</span><br/> Healthy Fresh Food For You.</h1>
                <img className='main__plate' src={mainImagePlate} alt={'plate'}/>
            </div>
        </main>
    );
}

export default Main;
