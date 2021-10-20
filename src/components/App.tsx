import * as React from 'react';
import type { AppProps } from '../types/App';


const App = (params: AppProps): JSX.Element => {
    console.log(params);
    return (
        <div>learningpaths-block-root from React</div>
    );
}

export default App;
