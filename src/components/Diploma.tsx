import React, { useContext } from 'react';
import { AppContext } from './Context';
import type { Data as DataProps } from '../types/Data';


interface Params {
    id: number;
    name: string;
}

const Diploma = (params: Params): JSX.Element => {
    const { apiUrl, setCurrentData, setLoader } = useContext(AppContext);

    const fetchData = (id: number) => {
        setLoader(true);

        fetchAPI(id).then(jsonData => {
            setCurrentData(jsonData);
            setLoader(false);
        });
    }

    const fetchAPI = async (id: number): Promise<DataProps> => {
        const response = await fetch(`${apiUrl}/data/${id}`);
        return await response.json();
    };

    const handleKeypress = (event: KeyboardEvent) => {
        if (event.key == '13' || event.keyCode === 13) {
            fetchData(params.id);
        }
    }

    return (
        <article 
            className="lpb-diploma"
            onClick={() => fetchData(params.id)}
            onKeyDown={(event: any) => handleKeypress(event)}
        >
            <h4 
                className="lpb-diploma-name" 
                data-lpb-id={params.id}
                tabIndex={0}
            >
                {params.name}
            </h4>
        </article>
    );
}

export default Diploma;
