import { Component } from 'react';
import './card-list.styles.css'
import Card from '../card/card.component';

class Cardlist extends Component {
    render() {
        const { cats } = this.props;
        return (
            <div className='card-list'>
                { cats.map((cats) => {
                    return(
                        <Card cat = { cats }/>
                    );
                })}
            </div>
        );
    }
}

export default Cardlist;