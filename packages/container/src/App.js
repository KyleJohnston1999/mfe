import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Progress from './components/Progress';
// import AuthApp from './components/AuthApp';
// import MarketingApp from './components/MarketingApp'; eager loading

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));


const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <StylesProvider createGenerateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route>
                                <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
                            </Route>
                            {/* <Route>
                                <
                            </Route> */}
                            <Route path="/auth" component={AuthLazy} />
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};