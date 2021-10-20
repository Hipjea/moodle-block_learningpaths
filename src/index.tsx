import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import type { AppProps } from './types/App';


const init = (params: AppProps) => {
    return ReactDOM.render(
        <App {...params} />,
        document.getElementById('learningpaths-block-root')
    );
};

export { init };
