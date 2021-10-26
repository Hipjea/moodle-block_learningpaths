import React from 'react';
import type { FieldProps } from '../types/Field';


const Field = (params: FieldProps): JSX.Element => {
    const renderDiplomas = () => {
        return (
            params.diplomas && params.diplomas.map(item => {
                console.log(item.name);

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

    return (
        <>
            <h3 className="lpb-field-name">{params.name}</h3>
            <div className="lpb-field-content">
                {renderDiplomas()}
            </div>
        </>
    );
}

export default Field;
