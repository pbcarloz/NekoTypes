import { Neko } from '../../App';
import './card-list.styles.css'

type CardProps = {
    cat: Neko;
}

const Card = ({ cat }: CardProps) => {
    const { name, id, email } = cat;
    return (
        <div className='card-container' key={id}>
            <img alt={`cat {name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`} />
            <h2>
                {name}
            </h2>
            <p>
                {email}
            </p>
        </div>
    );

}

export default Card;