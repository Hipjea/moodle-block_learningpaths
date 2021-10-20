import * as React from 'react';
import type { FieldProps } from '../types/Field';


const Field = (params: FieldProps): JSX.Element => {
    return (
        <h5>{params.name}</h5>
    );
}

export default Field;
