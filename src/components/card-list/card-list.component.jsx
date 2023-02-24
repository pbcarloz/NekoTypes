
import './card.styles.css'
import Card from '../card/card.component';

const Cardlist = ({ cats }) => (

    <div className='card-list'>
        {cats.map((cats) => {
            return (
                <Card cat={cats} />
            );
        })}
    </div>

);

export default Cardlist;