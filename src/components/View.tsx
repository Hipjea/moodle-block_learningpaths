import React, { useEffect, useState } from 'react';
import Field from './Field';
import type { AppProps } from '../types/App';
import type { FieldProps } from '../types/Field';


const View = (params: AppProps) => {
    const [fields, setFields] = useState<Array<FieldProps>>([]);

    useEffect(() => {
        fetchAPI().then(data => setFields(data));
    }, []);

    const fetchAPI = async (): Promise<Array<FieldProps>> => {
        const response = await fetch(`${params.apiUrl}/fields/all`);
        const data = await response.json();
        return data.fields;
    };

    return(
        <ul className="lpb-diploma-list">
            { fields.map(field => {
                return <Field {...field} />
            }) }
        </ul>
    );
};

export default View;
