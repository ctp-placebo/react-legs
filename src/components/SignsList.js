import { useState } from 'react';
import SignItem from './SignItem';
import './SignsList.css';
import { Icon } from '@iconify/react';


const SignsList = props => {

    if (props.items.length === 0) {
        return (
            <h2 className='signs-list__default'>Something is wrong, no signs available 
                <Icon icon="ic:baseline-heart-broken" color="red" />
            </h2>
        )
    }

    const [totalLegs, setTotalLegs] = useState(0);
    const [singleSignCounter, setSingleSignCounter] = useState(0);
    const handleAddLegs = (number) => {
        setTotalLegs((preTotal) => preTotal + number);
    };
    
    const handleSubtractLegs = (number) => {
        setTotalLegs((preTotal) => preTotal - number);
    };

    return(
        <div>
            <div className='total-legs'>Antall bein <br/><span>{totalLegs}</span></div>
            <ul className='signs-list'>
                {
                    props.items.map((sign) => (
                        <SignItem
                        key={sign.id}
                        name={sign.name}
                        numberLegs={sign.numberLegs}
                        signImg={require('../assets/signImages/' + sign.signImg) }
                        onAdd={() => handleAddLegs(sign.numberLegs)}
                        onSubtract={() => handleSubtractLegs(sign.numberLegs)}
                        />
                    )
                )}
            </ul>
        </div>
    )
};
export default SignsList;