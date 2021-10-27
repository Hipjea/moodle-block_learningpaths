import React, { useContext } from 'react';
import { AppContext } from '../context';


const Modal = (): JSX.Element => {
    const { currentData } = useContext(AppContext);

    console.log("modal", currentData);

    return (
        <div id="lpb-modal">
            <div id="lpb-modal-content">
                <span id="lpb-modal-close">&times;</span>
                <div id="lpb-modal-content-body">...</div>
            </div>
        </div>
    )
};

export default Modal;