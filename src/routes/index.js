import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import About from '../components/About';
import { Whoops404 } from '../components';

const history = createHashHistory();

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
        width: '100%'
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
});

const getRoutes = (store) => {
    return (
        <Router className={styles.root} history={history}>
            <Switch>
                <Route path="/" component={About}/>
                <Route path="*" component={Whoops404}/>
            </Switch>
        </Router>
    );
};

export default getRoutes;
