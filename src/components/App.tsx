import React, { useContext, useEffect } from 'react';
import type { AppProps } from '../types/App';
import View from './View';
import { AppContext } from '../context';


const App = (params: AppProps): JSX.Element => {
    const { setUrl } = useContext(AppContext);

    useEffect(() => {
        setUrl(params.apiUrl);
    }, []);

    return (
        <View {...params} />
    );
}

export default App;
