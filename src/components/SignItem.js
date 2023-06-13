import { useState } from "react";
import { Icon } from '@iconify/react';
import PlusMinusBtns from "./PlusMinusBtns";

import Card from '../UI/Card';
import './SignItem.css';

const SignItem = (props) => {

    const [name, setName] = useState(props.name);

    const clickHandler = () => {
        setName('updated');
        console.log('set name UNFINISHED', name);
    };

    return (
        <Card className='sign-item'>
            <div className="sign-item__detail">
                <img className="sign-item__image" src={props.signImg} />
                <h2>{name}
                    {/* <button onClick={clickHandler}>
                        <Icon icon="ic:baseline-edit" />
                    </button> */}
                </h2>
                <div className="sign-item__nrlegs">
                    <span>{props.numberLegs} ben</span>
                </div>

                <PlusMinusBtns
                    key={props.id}
                    numberLegs={props.numberLegs}
                    onAdd={props.onAdd}
                    onSubtract={props.onSubtract}
                />
            </div>
        </Card>
    );
}

export default SignItem;

