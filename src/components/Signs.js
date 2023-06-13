import SignsList from './SignsList';
import Card from '../UI/Card';
import './Signs.css';

// Collects together sign components:
// signs imports < SignList imports < SignItem
// Filter and UI/Card. 

const Signs = (props) => { 

    let signs = props.items;
        
    return(
        <li>
            <SignsList items={signs} />
        </li>
    )
}

export default Signs;