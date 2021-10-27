import React, { useContext } from 'react';
import { AppContext } from './Context';
import type { DataProps } from '../types/Data';


interface Params {
    id: number;
    name: string;
}

const Diploma = (params: Params): JSX.Element => {
    const { apiUrl, setCurrentData } = useContext(AppContext);

    const fetchData = (id: number) => {
        fetchAPI(id).then(jsonData => { 
            setCurrentData(jsonData);
        });
    }

    const fetchAPI = async (id: number): Promise<DataProps> => {
        const response = await fetch(`${apiUrl}/data/${id}`);
        return await response.json();
    };

    return (
        <article 
            className="lpb-diploma"
            onClick={() => fetchData(params.id)}
        >
            <h4 
                className="lpb-diploma-name" 
                data-lpb-id={params.id}
            >
                {params.name}
            </h4>
        </article>
    );
}

export default Diploma;
