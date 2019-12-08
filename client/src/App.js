import React from 'react';
import ErrorBoundary from './components/ErrorBoundry';
// import { lookUpPage } from './routes';
import routes from './routes';
import { preload } from './preload';

import './styles/normalize.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        let View = routes[window.__VIEW__];
        if (View) View = preload(View);
        this.state = {
            View,
        };
    }

    render() {
        const { View } = this.state;
        if (!View) return null;

        return (
            <ErrorBoundary>
                <View />
            </ErrorBoundary>
        );
    }
}

export default App;

