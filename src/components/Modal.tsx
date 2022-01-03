import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from './Context';
import DataView from './DataView';
import Loader from './Loader';
import strings from '../utils/strings.utils';


const Modal = (): JSX.Element => {
    const { currentData, setCurrentData, loader } = useContext(AppContext);
    const [showModal, setShowModal] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentData && currentData != {} && currentData != []) {
            setShowModal(true);
            modalRef.current?.focus();
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

    useEffect(() => {
        window.addEventListener("keydown", handleEscape, false);
        return () => {
            window.removeEventListener("keydown", handleEscape, false);
        };
    });

    const closeModal = () => { 
        setCurrentData(null), setShowModal(false);
    }

    const handleEscape = (event: KeyboardEvent) => {
        if (event.key == '27' || event.keyCode === 27) {
            closeModal();
        }
    }

    return (
        <div 
            id="lpb-modal" 
            className={`${showModal ? "active" : ""}`}
            aria-hidden={`${showModal ? "false" : "true"}`}
            aria-describedby="modal-desc"
        >
            <div 
                ref={modalRef}
                id="lpb-modal-content"
                tabIndex={parseInt(`${showModal ? -1 : 0}`)}
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
                <div id="modal-desc" className="screenreader-text">
                    { strings.modalDesc }
                </div>
            </div>
        </div>
    )
};

export default Modal;
