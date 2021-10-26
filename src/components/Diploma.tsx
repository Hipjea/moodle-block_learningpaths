import React, { useState, useContext } from 'react';
import AppContext from '../context';
import Modal from './Modal';
import type { DataProps } from '../types/Data';


interface Params {
    id: number;
    name: string;
}

const Diploma = (params: Params): JSX.Element => {
    const ctx = useContext(AppContext);
    console.log("ctx", ctx);

    const [data, setData] = useState<DataProps>();

    const fetchData = (id: number) => {
        fetchAPI(id).then(jsonData => { 
            setData(jsonData);
            renderModal();
        });
    }

    const renderModal = () => {
        return (
            <Modal {...data} />
        )
    }

    const fetchAPI = async (id: number): Promise<DataProps> => {
        const response = await fetch(`${ctx.apiUrl}/data/${id}`);
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
