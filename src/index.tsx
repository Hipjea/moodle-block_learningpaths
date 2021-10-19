import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

const init = () => {
    return ReactDOM.render(
        <App />,
        document.getElementById('learningpaths-block-root')
    );
};

export { init };
