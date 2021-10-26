import React from 'react';

const Modal = (params: any): JSX.Element => {
    console.log("modal", params);

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