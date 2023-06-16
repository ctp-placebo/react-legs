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
    const handleAddLegs = (numberLegs) => {
        setTotalLegs((preTotal) => preTotal + numberLegs);
    };
    
    const handleSubtractLegs = (numberLegs) => {
        if (totalLegs > 0) {
            setTotalLegs((preTotal) => preTotal - numberLegs);
        }
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
                            namePlural={sign.namePlural}
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