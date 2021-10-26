import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import type { AppProps } from './types/App';
import AppContext from './context';


const init = (params: AppProps) => {
    return ReactDOM.render(
        <AppContext.Provider value={params}>
            <App {...params} />
        </AppContext.Provider>,
        document.getElementById('learningpaths-block-root')
    );
};

export { init };
