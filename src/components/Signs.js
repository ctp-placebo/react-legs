import SignsList from './SignsList';
import './Signs.css';

// Collects together sign components:
// signs imports < SignList imports < SignItem imports < plusMinusBtns

const Signs = (props) => { 

    let signs = props.items;
        
    return(
        <li>
            <SignsList items={signs} />
        </li>
    )
}

export default Signs;