import { useState } from "react";
import { Icon } from '@iconify/react';
import PlusMinusBtns from "./PlusMinusBtns";

import Card from '../UI/Card';
import './SignItem.css';

const SignItem = (props) => {

    const [name, setName] = useState(props.name);
    const [counter, setCounter] = useState(0);

    const [namePlural] = useState(props.namePlural);
    // const clickHandler = () => {
    //     setName('updated');
    //     console.log('set name UNFINISHED', name);
    // };
    const handleCounterAdd = () => {
        setCounter((preCounter) => preCounter + 1);
        props.onAdd();
    }
    const handleCounterSubtract = () => {
        setCounter((preCounter) => preCounter - 1);
        props.onSubtract();
    }

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
                    onAdd={handleCounterAdd}
                    onSubtract={handleCounterSubtract}
                />
                <div className="sign-counter">
                     {counter} {counter == 1 ? name : namePlural }  
                </div>
            </div>
        </Card>
    );
}

export default SignItem;

