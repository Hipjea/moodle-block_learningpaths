import * as React from 'react';
import type { FieldProps } from '../types/Field';


const Field = (params: FieldProps): JSX.Element => {
    return (
        <h3 className="lpb-field-name">{params.name}</h3>
    );
}

export default Field;
