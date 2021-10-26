import React, { useEffect, useState } from 'react';
import type { FieldProps } from '../types/Field';
import type { DataProps } from '../types/Data';


const Field = (params: FieldProps): JSX.Element => {
    const [data, setData] = useState<Array<DataProps>>([]);

    useEffect(() => {
        fetchAPI().then(data => {
            setData(data);
        });
    }, []);

    const fetchAPI = async (): Promise<Array<DataProps>> => {
        const response = await fetch(`${apiUrl}/data/1`);
        const data = await response.json();
        return data.fields;
    };

    return (
        <h3 className="lpb-field-name">{params.name}</h3>
    );
}

export default Field;
