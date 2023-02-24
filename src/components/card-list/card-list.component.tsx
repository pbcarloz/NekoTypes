
import './card.styles.css'
import Card from '../card/card.component';
import { Neko } from '../../App';



type CatsProps = {
    cats: Neko[];
}

const Cardlist = ({ cats }: CatsProps) => (
    <div className='card-list'>
        {cats.map((cats) => {
            return (
                <Card cat={cats} />
            );
        })}
    </div>

);

export default Cardlist;