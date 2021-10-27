import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from './Context';
import DataView from './DataView';
import Loader from './Loader';


const Modal = (): JSX.Element => {
    const { currentData, setCurrentData, loader } = useContext(AppContext);
    const [showModal, setShowModal] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentData && currentData != {} && currentData != []) {
            setShowModal(true);
        }
    });

    useEffect(() => {
        // handle the click outside of the modal body
        const handleClick = (e: any) => {
            if (modalRef && modalRef.current && !modalRef.current.contains(e.target)) {
                closeModal();
            }
        }
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    const closeModal = () => { 
        setCurrentData(null), setShowModal(false);
    }

    return (
        <div id="lpb-modal" className={`${showModal ? "active" : ""}`}>
            <div 
                ref={modalRef}
                id="lpb-modal-content"
            >
                <span 
                    id="lpb-modal-close"
                    onClick={() => closeModal()}
                >
                    &times;
                </span>
                <div id="lpb-modal-content-body">
                    { loader 
                        ? <Loader />
                        : <DataView {...currentData} />
                    }
                </div>
            </div>
        </div>
    )
};

export default Modal;
