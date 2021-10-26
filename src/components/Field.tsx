import React, { useState } from 'react';
import type { FieldProps } from '../types/Field';


const Field = (params: FieldProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(false);

    const renderDiplomas = () => {
        return (
            params.diplomas && params.diplomas.map(item => {
                return (
                    <article key={item.id} className="lpb-diploma">
                        <h4 
                            className="lpb-diploma-name" 
                            data-lpb-id={item.id}
                        >
                            {item.name}
                        </h4>
                    </article>
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
