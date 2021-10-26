import React, { useState } from 'react';
import Diploma from './Diploma';
import type { FieldProps } from '../types/Field';


const Field = (params: FieldProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(false);

    const renderDiplomas = () => {
        return (
            params.diplomas && params.diplomas.map(item => {
                return (
                    <Diploma {...item} />
                );
            })
        );
    };
    
    const toggleActive = () => (setActive(!active));

    return (
        <div className={`lpb-field${active ? " active" : ""}`}>
            <h3 
                className="lpb-field-name"
                onClick={() => toggleActive()}
            >
                {params.name}
            </h3>
            <div className="lpb-field-content">
                {renderDiplomas()}
            </div>
        </div>
    );
}

export default Field;
