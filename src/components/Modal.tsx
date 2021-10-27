import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './Context';
import DataView from './DataView';


const Modal = (): JSX.Element => {
    const { currentData, setCurrentData } = useContext(AppContext);
    const [showModal, setShowModal] = useState<boolean>(false);
    
    console.log("cdata", currentData);

    useEffect(() => {
        console.log("modal", currentData);
        if (currentData && currentData != {}) {
            setShowModal(true);
        }
    });

    const closeModal = () => { 
        setCurrentData(null), setShowModal(false);
    }

    return (
        <div id="lpb-modal" className={`${showModal ? "active" : ""}`}>
            <div id="lpb-modal-content">
                <span 
                    id="lpb-modal-close"
                    onClick={() => closeModal()}
                >
                    &times;
                </span>
                <div id="lpb-modal-content-body">
                    <DataView {...currentData} />
                </div>
            </div>
        </div>
    )
};

export default Modal;
