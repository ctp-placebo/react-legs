import { useState } from "react";
import {Icon} from '@iconify/react';

import './PlusMinusBtns.css';

const PlusMinusBtns = ({onAdd, onSubtract, nrClicks}) => {

    return (
        <div className="plus-minus">
            
            <button className="minus" onClick={onSubtract}>
                <Icon icon="ep:remove-filled" />
            </button>
            <button className="plus" onClick={onAdd}>
                <Icon icon="ic:baseline-add-circle" />
            </button>
        </div>
    );
};

export default PlusMinusBtns;