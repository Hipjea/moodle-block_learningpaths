import * as React from 'react';
import Year from './Year';
import type { DataProps } from '../types/Data';

const DataView = (data: DataProps): JSX.Element => {
    return (
        <article className="lpb-diploma">
            <h4 className="lpb-diploma-name">{data.name}</h4>
            <div className="lpb-diploma-description" dangerouslySetInnerHTML={{ __html: data.description }} />
            <section className="lpb-diploma-body">
                { data.years && data.years.map((data: any) => {
                    return (<Year {...data} />);
                }) }
            </section>
        </article>
    )
};

export default DataView;
