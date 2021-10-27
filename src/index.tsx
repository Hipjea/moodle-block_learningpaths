import React from 'react';
import * as ReactDOM from 'react-dom';
import AppProvider from './components/Context';
import App from './components/App';
import type { AppProps } from './types/App';


const init = (params: AppProps) => {
    return ReactDOM.render(
        <AppProvider>
            <App {...params} />
        </AppProvider>,
        document.getElementById('learningpaths-block-root')
    );
};

export { init };
