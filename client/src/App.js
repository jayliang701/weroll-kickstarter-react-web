import React from 'react';
import ErrorBoundary from './components/ErrorBoundry';
// import Home from './pages/Home';
import * as routes from './routes';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            View: routes.match(window.location.pathname),
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

