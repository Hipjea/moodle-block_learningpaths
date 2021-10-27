import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import type { AppProps } from './types/App';
import AppProvider from './components/Context';


const init = (params: AppProps) => {
    return ReactDOM.render(
        <AppProvider>
            <App {...params} />
        </AppProvider>,
        document.getElementById('learningpaths-block-root')
    );
};

export { init };
