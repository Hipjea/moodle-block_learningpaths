import * as React from 'react';
import Year from './Year';
import strings from '../utils/strings.utils';
import type { Data as DataProps } from '../types/Data';
import type { ResourceData } from '../types/Data';
import { createHeader, createRow } from '../utils/table.utils';

const DataView = (data: DataProps): JSX.Element => {
    return (
        <article className="lpb-diploma">
            <h4 className="lpb-diploma-name">{data.name}</h4>
            <div className="lpb-diploma-description" dangerouslySetInnerHTML={{ __html: data.description }} />
            <section className="lpb-diploma-body">
                { data.resources
                    ?   <div className="flex-table active">
                            <div className="column-wrapper">
                                <div className="column header">
                                    { createHeader(strings.thead) }
                                </div>
                                { data.resources.map((resource: ResourceData): JSX.Element => {
                                    return createRow(resource, "resource")
                                }) }
                            </div>
                        </div>
                    :   null
                }
                { data.years && data.years.map((data: any) => {
                    return (<Year {...data} />);
                }) }
            </section>
        </article>
    )
};

export default DataView;
